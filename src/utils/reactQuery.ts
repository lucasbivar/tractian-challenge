import {
	useQuery,
	useMutation,
	type UseQueryOptions,
	type UseQueryResult,
	type UseMutationResult,
} from "@tanstack/react-query";
import { queryClient } from "../main";

type QueryKeyT = [string];

export const useFetch = <T>(
	queryKey: string,
	query: () => Promise<T>,
	config?: UseQueryOptions<T, Error, T, QueryKeyT>,
): UseQueryResult<T, Error> => {
	const context = useQuery<T, Error, T, QueryKeyT>(
		[queryKey],
		async () => await query(),
		{
			staleTime: 120000,
			...config,
		},
	);

	return context;
};

export const useDelete = <T extends { id: number }>(
	queryKey: string,
	useQueryCustom: () => UseQueryResult<T[], Error>,
): UseMutationResult<T, unknown, T, unknown> => {
	const { data: entities } = useQueryCustom();

	return useMutation(async (data: T) => data, {
		onSuccess: (data) => {
			const entitiesNotBeDelete = entities?.filter(
				(entity) => entity.id !== data.id,
			);

			queryClient.setQueryData([queryKey], () => entitiesNotBeDelete);
		},
	});
};
