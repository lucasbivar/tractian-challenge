import { type Asset } from "../interfaces/assets";

export const validateAsset = (asset: Asset): void => {
	if (!asset.name?.replace(/\s/g, "").length || !asset.model || !asset.unitId)
		throw Error("Invalid Required Fields");
};
