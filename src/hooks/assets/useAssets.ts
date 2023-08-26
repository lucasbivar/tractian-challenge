import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllAssets } from "../../services/assets";
import { type Asset } from "../../interfaces/assets";

export const useUsers = (): UseQueryResult<Asset[], Error> => {
	return useFetch<Asset[]>("assets", getAllAssets);
};
