import type { Asset } from "../interfaces/assets";
import { axiosTractianApiInstance } from "../api/axios";

export const getAllAssets = async (): Promise<Asset[]> => {
	const response = await axiosTractianApiInstance.get<Asset[]>("/assets");

	return response.data;
};

export const getAssetById = async (id: number): Promise<Asset> => {
	const response = await axiosTractianApiInstance.get<Asset>(`/assets/${id}`);

	return response.data;
};
