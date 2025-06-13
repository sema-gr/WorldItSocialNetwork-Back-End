import { IError, IOkWithData } from "../types/types";
import friendshipRepository from "./friendshipRepository";
import { CreateFriendship, IFriendship } from "./types";

async function createFriendship(data: CreateFriendship): Promise<IOkWithData<CreateFriendship> | IError> {
	const result = await friendshipRepository.createFriendship(data)
	console.log(result)
	if (!result) {
		return { status: "error", message: "Friendship not created" }
	}
	return { status: "success", data: result };
}
async function getFriendship(): Promise<IOkWithData<IFriendship[]> | IError> {
	const friendship = await friendshipRepository.getFriendship();

	if (!friendship) {
		return { status: "error", message: "No friendship found" };
	}

	return { status: "success", data: friendship };
}

const friendshipService = {
    createFriendship: createFriendship,
	getFriendship: getFriendship
}

export default friendshipService;