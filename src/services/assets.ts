import type { Asset, Models } from "../interfaces/assets";
import { axiosTractianApiInstance } from "../api/axios";

export const getFakeImage = (model: Models): string => {
	if (model === "motor")
		return "https://bimgix.tractian.com/motor-eletrico.png";

	if (model === "fan") return "https://bimgix.tractian.com/Ventilador-1.png";

	return "";
};

export const getAllAssets = async (): Promise<Asset[]> => {
	const response = await axiosTractianApiInstance.get<Asset[]>("/assets");

	return response.data;
};

export const getAssetById = async (id: number): Promise<Asset> => {
	const response = await axiosTractianApiInstance.get<Asset>(`/assets/${id}`);

	return response.data;
};
