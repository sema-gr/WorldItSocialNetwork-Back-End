import friendshipService from "./friendshipService";
import { Request, Response } from "express";
import { AcceptedFriendshipBody } from "./types";
import client from "../client/prismaClient";
import { AuthenticatedSocket } from "../types/socket";

const userSockets = new Map<number, AuthenticatedSocket>();

export function registerFriendshipSocket(socket: AuthenticatedSocket) {
	userSockets.set(socket.data.userId, socket);

	socket.on("disconnect", () => {
		userSockets.delete(socket.data.userId);
	});
}

async function createFriendship(req: Request, res: Response) {
	let body = req.body
	body.profile1_id = res.locals.userId
	const result = await friendshipService.createFriendship(body)
	if (result.status == "error") {
		res.json(result)
	} else {
		res.json(result.data);
	}
}
async function getFriendship(req: Request, res: Response) {
	const result = await friendshipService.getFriendship();
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}

async function acceptFriendship(req: Request<{}, {}, AcceptedFriendshipBody>, res: Response) {
	let data = req.body
	const id = res.locals.userId
	const where = { profile1_id: data.id, profile2_id: +id }
	const result = await friendshipService.acceptFriendship(where);
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}

async function deleteFriendship(req: Request<{}, {}, AcceptedFriendshipBody>, res: Response) {
	const userId = res.locals.userId;
	const { id: otherUserId } = req.body;

	console.log(userId, otherUserId);

	const pairs = [
		{ profile1_id: userId, profile2_id: otherUserId },
		{ profile1_id: otherUserId, profile2_id: userId },
	];

	const user = await client.profile.findUnique({
		where: { id: userId },
		select: {
			name: true,
			surname: true,
		}
	});

	const fullName = user ? `${user.name} ${user.surname}` : "Користувач";

	for (const where of pairs) {
		const result = await friendshipService.deleteFriendship(where);

		if (result.status === "success") {

			const senderSocket = userSockets.get(otherUserId);
			if (senderSocket) {
				senderSocket.emit("friendRequestDeclined", {
					requestId: otherUserId,
					message: `Користувач ${fullName} відхилив ваш запит на дружбу.`,
				});
			}
			res.json(result.data);
		}
	}
	res.send("error")
}

const friendshipController = {
	createFriendship: createFriendship,
	getFriendship: getFriendship,
	acceptFriendship,
	deleteFriendship
}


export default friendshipController