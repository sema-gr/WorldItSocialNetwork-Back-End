import { IError, IOkWithData } from "../types/types";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";
import userRepository from "./userRepository";
import { CreateUser, UpdateUser, User } from "./types";
import path from "path";
import fs from "fs/promises";
import { API_BASE_URL } from "..";
import bcrypt from "bcryptjs";
import { Resend } from "resend";

const emailCodes = new Map<string, { code: string; expiresAt: number }>();
const resend = new Resend(process.env.RESEND_API_KEY);

async function getUserById(id: number): Promise<IOkWithData<User> | IError> {
	try {
		const user = await userRepository.getUserById(id);
		if (!user) {
			return { status: "error", message: "User not found" };
		}

		return { status: "success", data: user };
	} catch (err) {
		if (err instanceof Error) {
			return { status: "error", message: err.message };
		}
		return { status: "error", message: "Internal server error" };
	}
}

async function login(email: string, password: string) {
	const user = await userRepository.findUserByEmail(email);
	if (!user) {
		return { status: "error", message: "User not found" };
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return { status: "error", message: "Passwords didn't match" };
	}

	const token = sign({ id: user.id }, SECRET_KEY, { expiresIn: "7d" });

	return { status: "success", data: token };
}

async function registration(
	userData: CreateUser,
): Promise<IOkWithData<string> | IError> {
	try {
		const user = await userRepository.findUserByEmail(userData.email);
		if (user) {
			return { status: "error", message: "User already exists" };
		}

		const hashedPassword = await hash(userData.password, 10);

		const hashedUserData = {
			...userData,
			password: hashedPassword,
		};

		const newData: CreateUser = {
			...userData,
			image: "uploads/user.png",
		};

		const newUser = await userRepository.createUser(hashedUserData);
		console.log(newData);

		if (!newUser) {
			return { status: "error", message: "User is not created" };
		}

		const token = sign({ id: newUser.id }, SECRET_KEY, { expiresIn: "1d" });

		return { status: "success", data: token };
	} catch (err) {
		if (err instanceof Error) {
			return { status: "error", message: err.message };
		}
		return { status: "error", message: "An unknown error occurred" };
	}
}

async function sendEmail(email: string) {
	const normalizedEmail = email.trim().toLowerCase();

	const code = Math.floor(100000 + Math.random() * 900000).toString();
	const expiresAt = Date.now() + 10 * 60 * 1000;

	emailCodes.set(normalizedEmail, { code, expiresAt });

	try {
		await resend.emails.send({
			from: "ChitChat <onboarding@resend.dev>",
			to: normalizedEmail,
			subject: "Код подтверждения",
			html: `
				<p>Ваш код підтвердження:</p>
				<h2>${code}</h2>
				<p>Код діє 10 хвилин</p>
			`,
		});

		return { success: true };
	} catch (err) {
		console.error("Resend error:", err);
		return { status: "error", message: "Не удалось отправить письмо" };
	}
}

function verifyCode(email: string, userInputCode: string) {
	const normalizedEmail = email.trim().toLowerCase();
	const storedData = emailCodes.get(normalizedEmail);

	if (!storedData) {
		return { status: "error", message: "Код не найден или устарел" };
	}

	const { code, expiresAt } = storedData;

	if (Date.now() > expiresAt) {
		emailCodes.delete(normalizedEmail);
		return { status: "error", message: "Код истёк" };
	}

	if (userInputCode !== code) {
		return { status: "error", message: "Невірний код!" };
	}

	emailCodes.delete(normalizedEmail);
	return { success: true };
}

function saveCode(email: string, code: string) {
	console.log(email + " bebebebeb");
	const normalizedEmail = email.trim().toLowerCase();
	const expiresAt = Date.now() + 5 * 60 * 1000;
	emailCodes.set(normalizedEmail, { code, expiresAt });
}

async function updateUserById(
	data: UpdateUser,
	id: number,
): Promise<IOkWithData<UpdateUser> | IError> {
	const createdImageFilename: string[] = [];
	try {
		const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");

		await fs.mkdir(uploadDir, { recursive: true });

		let updateData = { ...data };

		if (
			updateData.image &&
			typeof updateData.image === "string" &&
			updateData.image.startsWith("data:image")
		) {
			const matches = updateData.image.match(
				/^data:image\/(\w+);base64,(.+)$/,
			);
			if (!matches) {
				return {
					status: "error",
					message: "Невірний формат base64 зображення",
				};
			}

			const [, ext, base64Data] = matches;
			const allowedFormats = ["jpeg", "png", "gif"];
			const maxSizeInBytes = 5 * 1024 * 1024;

			if (!allowedFormats.includes(ext.toLowerCase())) {
				return {
					status: "error",
					message: `Непідтримуваний формат зображення: ${ext}`,
				};
			}

			const buffer = Buffer.from(base64Data, "base64");
			if (buffer.length > maxSizeInBytes) {
				return {
					status: "error",
					message: `Зображення занадто велике: максимум 5 MB`,
				};
			}

			const filename = `${Date.now()}-${Math.round(
				Math.random() * 1000000,
			)}.${ext}`;
			const filePath = path.join(uploadDir, filename);

			await fs.writeFile(filePath, buffer);

			try {
				await fs.access(filePath);
				updateData.image = `uploads/${filename}`;
				createdImageFilename.push(filename);
			} catch {
				return {
					status: "error",
					message: "Не вдалося зберегти зображення",
				};
			}
		}

		const user = await userRepository.updateUserById(updateData, id);

		if (!user) {
			for (const filename of createdImageFilename) {
				await fs.unlink(path.join(uploadDir, filename)).catch(() => {});
			}
			return { status: "error", message: "User doesn't update" };
		}

		if (user.image && !user.image.startsWith("http")) {
			const relativeUrl = user.image
				.replace(/^uploads\/+/, "")
				.replace(/\\/g, "/");
			user.image = `${API_BASE_URL}/uploads/${relativeUrl}`;
		}
		console.log("beeeeeeeeeeeee");
		console.log(user);
		console.log("beeeeeeeeeeeee");

		return { status: "success", data: user };
	} catch (err) {
		for (const filename of createdImageFilename) {
			await fs
				.unlink(
					path.join(
						__dirname,
						"..",
						"..",
						"public",
						"uploads",
						filename,
					),
				)
				.catch(() => {});
		}

		return { status: "error", message: "Internal server error" };
	}
}

async function getUsers(): Promise<IOkWithData<User[]> | IError> {
	const users = await userRepository.getUsers();

	if (!users) {
		return { status: "error", message: "No users found" };
	}

	return { status: "success", data: users };
}

const userService = {
	login,
	registration,
	getUserById,
	sendEmail,
	verifyCode,
	saveCode,
	updateUserById,
	getUsers,
};

export default userService;
