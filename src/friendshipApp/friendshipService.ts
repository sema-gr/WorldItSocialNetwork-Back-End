import { IError, IOkWithData } from "../types/types";
import friendshipRepository from "./friendshipRepository";
import { AcceptedFriendshipWhere, CreateFriendship, IFriendship, WhereFriendship } from "./types";

async function createFriendship(data: CreateFriendship): Promise<IOkWithData<CreateFriendship> | IError> {

	const result = await friendshipRepository.createFriendship(data)
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

async function acceptFriendship(where: AcceptedFriendshipWhere): Promise<IOkWithData<IFriendship> | IError> {
	const updatedFriendship = await friendshipRepository.updateFriendship({ accepted: true }, {profile1_id_profile2_id: where})
	if (!updatedFriendship) {
		return { status: "error", message: "No friendship found" };
	}
	return { status: "success", data: updatedFriendship }
}

const friendshipService = {
	createFriendship: createFriendship,
	getFriendship: getFriendship,
	acceptFriendship
}

export default friendshipService;