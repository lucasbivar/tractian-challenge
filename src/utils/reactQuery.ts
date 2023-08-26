import {
	useQuery,
	type UseQueryOptions,
	type UseQueryResult,
} from "@tanstack/react-query";

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
			staleTime: 5000,
			...config,
		},
	);

	return context;
};
