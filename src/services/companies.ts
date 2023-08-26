import type { Company } from "../interfaces/companies";
import { axiosTractianApiInstance } from "../api/axios";

export const getAllCompanies = async (): Promise<Company[]> => {
	const response = await axiosTractianApiInstance.get<Company[]>("/companies");

	return response.data;
};

export const getCompanyById = async (id: string): Promise<Company> => {
	const response = await axiosTractianApiInstance.get<Company>(
		`/companies/${id}`,
	);

	return response.data;
};
