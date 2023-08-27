import { type UseMutationResult } from "@tanstack/react-query";
import { useDelete } from "../../utils/reactQuery";
import { type Asset } from "../../interfaces/assets";
import { useAssets } from "./useAssets";

export const useDeleteAsset = (): UseMutationResult<
	Asset,
	unknown,
	Asset,
	unknown
> => {
	return useDelete<Asset>("assets", () => useAssets({}));
};
