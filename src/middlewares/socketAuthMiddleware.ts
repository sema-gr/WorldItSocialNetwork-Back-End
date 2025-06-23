import { verify } from 'jsonwebtoken';
import { Socket } from 'socket.io'
import { SECRET_KEY } from '../config/token';
import { IToken } from './authTokenMiddleware';

export async function socketAuthMiddleware(
	socket: Socket,
	next: (error?: any) => void
) {
	const token = socket.handshake.auth.token;

	if (!token) {
		next(new Error("no token"));
		return;
	}
	try {
		const decodedToken = verify(token, SECRET_KEY) as IToken;
		socket.data.userId = decodedToken.id;
		next();
	} catch (error) {
		next(error);
	}
}