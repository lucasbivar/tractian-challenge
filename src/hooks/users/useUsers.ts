import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllUsers } from "../../services/users";
import { type User } from "../../interfaces/users";

export const useUsers = (): UseQueryResult<User[], Error> => {
	return useFetch<User[]>("users", getAllUsers);
};
