import { type UseMutationResult } from "@tanstack/react-query";
import { useUpdate } from "../../utils/reactQuery";
import { type User } from "../../interfaces/users";
import { useUsers } from "./useUsers";

export const useUpdateUser = (): UseMutationResult<
	User,
	unknown,
	User,
	unknown
> => {
	return useUpdate<User>("users", () => useUsers({}));
};
