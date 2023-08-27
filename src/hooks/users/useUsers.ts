import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllUsers } from "../../services/users";
import { type User } from "../../interfaces/users";
import { arrayOfObjectsGeneralFilter } from "../../utils/manipulateDataStructures";

interface useUsersArgs {
	searchValue?: string;
}

export const useUsers = ({
	searchValue,
}: useUsersArgs): UseQueryResult<User[], Error> => {
	return useFetch<User[]>("users", getAllUsers, {
		select: (items) =>
			arrayOfObjectsGeneralFilter<User>(items, searchValue ?? ""),
	});
};
