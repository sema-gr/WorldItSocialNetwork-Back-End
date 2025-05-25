import { IError, IOkWithData } from "../types/types";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";
import userRepository from "./userRepository";
import { CreateUser, UpdateUser, User } from "./types";
import nodemailer from 'nodemailer';

const emailCodes = new Map<string, { code: string, expiresAt: number }>()

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

async function login(email: string, password: string): Promise<IOkWithData<string> | IError> {
  try {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
      return { status: "error", message: "User not found" };
    }
    if (typeof user === "string") {
      return { status: "error", message: user };
    }
    if (password !== user.password){
      return { status: "error", message: "Passwords didn`t match" };
    }
 

    const token = sign({id: user.id}, SECRET_KEY, { expiresIn: "7d" });

    return { status: "success", data: token };
  } catch (err) {
    if (err instanceof Error) {
      return { status: "error", message: err.message};
    }
    return { status: "error", message: "Internal server error" };
  }
}
  
async function registration(userData: CreateUser): Promise<IOkWithData<string> | IError> {
  try {

    const user = await userRepository.findUserByEmail(userData.email);
    if (user) {
      return { status: "error", message: "User already exists" };
    }

    // const hashedPassword = await hash(userData.password, 10);

    // const hashedUserData = {
    //   ...userData,
    //   password: hashedPassword,
    // };

    const newUser = await userRepository.createUser(userData);
    console.log(userData)
    
    if (!newUser) {
      return { status: "error", message: "User is not created" };
    }

    const token = sign({id: newUser.id}, SECRET_KEY, { expiresIn: "1d" });

    return { status: "success", data: token };
    
  } catch (err) {
    if (err instanceof Error) {
      return { status: "error", message: err.message };
    }
    return { status: "error", message: "An unknown error occurred" };
  }
}

async function sendEmail(email: string) {

  const generateCode = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const code = generateCode();
  const expiresAt = Date.now() + 10 * 60 * 1000;


  emailCodes.set(email, { code, expiresAt });


  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'honcharovstallker@gmail.com',
          pass: 'qxja qfuk urdy qihr' 
      }
  });


  const mailOptions = {
      from: 'chitchatbyteam1@gmail.com',
      to: email,
      subject: 'Код подтверждения',
      text: code
  };

  try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Письмо отправлено:', info.response);
      return { success: true, code };
  } catch (err) {
      console.error('Ошибка отправки:', err);
      return { status: "error", message: "Не удалось отправить письмо" };
  }
}


function verifyCode(email: string, userInputCode: string) {
  const storedData = emailCodes.get(email);
  
  // console.log(storedData)
  if (!storedData) {
      return { success: false, error: 'Код не найден или устарел' };
  }

  const { code, expiresAt } = storedData;

  if (Date.now() > expiresAt) {
      emailCodes.delete(email);
      console.log(emailCodes)
      return { success: false, error: 'Код истёк' };
  }


  if (userInputCode !== code) {
      return { success: false, error: 'Неверный код' };
  }

  emailCodes.delete(email);
  return { success: true };
}
  
function saveCode(email: string, code: string) {
  console.log(email + " bebebebeb")
  const normalizedEmail = email.trim().toLowerCase();
  const expiresAt = Date.now() + 5 * 60 * 1000;
  emailCodes.set(normalizedEmail, { code, expiresAt });
}

async function updateUserById(data: UpdateUser, id: number): Promise<IOkWithData<UpdateUser> | IError> {
  try {

    let updateData = data;

    if (updateData.password) {
      const hashedPassword = await hash(String(data.password), 10);
      updateData = { ...updateData, password: hashedPassword };
    }

    const user = await userRepository.updateUserById(updateData, id);

    if (!user) {
      return { status: 'error', message: "User doesn't update" };
    }

    return { status: 'success', data: user };
  } catch (err) {
    return { status: 'error', message: 'Internal server error' };
  }
}


const userService = {
  login,
  registration,
  getUserById,
  sendEmail,
  verifyCode,
  saveCode,
  updateUserById
};

export default userService;