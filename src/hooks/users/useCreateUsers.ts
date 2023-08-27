import { type UseMutationResult } from "@tanstack/react-query";
import { useCreate } from "../../utils/reactQuery";
import { type User } from "../../interfaces/users";
import { useUsers } from "./useUsers";

export const useCreateUser = (): UseMutationResult<
	User,
	unknown,
	User,
	unknown
> => {
	return useCreate<User>("users", () => useUsers({}));
};
