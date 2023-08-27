import { type UseMutationResult } from "@tanstack/react-query";
import { useCreate } from "../../utils/reactQuery";
import { type Asset } from "../../interfaces/assets";
import { useAssets } from "./useAssets";

export const useCreateAsset = (): UseMutationResult<
	Asset,
	unknown,
	Asset,
	unknown
> => {
	return useCreate<Asset>("assets", () => useAssets({}));
};
