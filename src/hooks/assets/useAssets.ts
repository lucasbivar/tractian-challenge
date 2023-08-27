import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllAssets, getAssetById } from "../../services/assets";
import { type Asset } from "../../interfaces/assets";
import { arrayOfObjectsGeneralFilter } from "../../utils/manipulateDataStructures";

interface useAssetsArgs {
	searchValue?: string;
}

export const useAssets = ({
	searchValue,
}: useAssetsArgs): UseQueryResult<Asset[], Error> => {
	return useFetch<Asset[]>("assets", getAllAssets, {
		select: (items) =>
			arrayOfObjectsGeneralFilter<Asset>(items, searchValue ?? ""),
	});
};

export const useAsset = (id: number): UseQueryResult<Asset, Error> => {
	return useFetch<Asset>(`asset-${id}`, async () => await getAssetById(id));
};
