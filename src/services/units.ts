import type { Unit } from "../interfaces/units";
import { axiosTractianApiInstance } from "../api/axios";

export const getAllUnits = async (): Promise<Unit[]> => {
	const response = await axiosTractianApiInstance.get<Unit[]>("/units");

	return response.data;
};

export const getUnitById = async (id: string): Promise<Unit> => {
	const response = await axiosTractianApiInstance.get<Unit>(`/units/${id}`);

	return response.data;
};
