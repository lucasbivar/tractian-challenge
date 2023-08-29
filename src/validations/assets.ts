import { type Models, type Asset } from "../interfaces/assets";

export const validateAsset = (asset: Asset): void => {
	if (
		asset.name === "" ||
		asset.model === ("" as Models) ||
		asset.unitId == null
	)
		throw Error("");
};
