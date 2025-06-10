import { IError, IOkWithData } from "../types/types";
import friendshipRepository from "./friendshipRepository";
import { CreateFriendship } from "./types";

async function createFriendship(data: CreateFriendship): Promise<IOkWithData<CreateFriendship> | IError> {
	const result = await friendshipRepository.createFriendship(data)
	console.log(result)
	if (!result) {
		return { status: "error", message: "Friendship not created" }
	}
	return { status: "success", data: result };
}


const friendshipService = {
    createFriendship: createFriendship
}

export default friendshipService;