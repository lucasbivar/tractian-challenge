import { type UseMutationResult } from "@tanstack/react-query";
import { useUsers } from "./useUsers";
import { type User } from "../../interfaces/users";
import { useDelete } from "../../utils/reactQuery";

export const useDeleteUser = (): UseMutationResult<
	User,
	unknown,
	User,
	unknown
> => {
	return useDelete<User>("users", () => useUsers({}));
};
