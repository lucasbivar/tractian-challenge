import { type Asset } from "../interfaces/assets";

export const validateAsset = (asset: Asset): void => {
	if (!asset.name || !asset.model || !asset.unitId)
		throw Error("Invalid Required Fields");
};
