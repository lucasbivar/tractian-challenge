import { type UseMutationResult } from "@tanstack/react-query";
import { useUpdate } from "../../utils/reactQuery";
import { type Asset } from "../../interfaces/assets";
import { useAssets } from "./useAssets";

export const useUpdateAsset = (): UseMutationResult<
	Asset,
	unknown,
	Asset,
	unknown
> => {
	return useUpdate<Asset>("assets", () => useAssets({}));
};
