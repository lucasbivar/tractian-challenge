import type { Company } from "../interfaces/companies";
import { axiosTractianApiInstance } from "../api/axios";
import { getAllUnits } from "./units";

export const getAllCompanies = async (): Promise<Company[]> => {
	const response = await axiosTractianApiInstance.get<Company[]>("/companies");

	return response.data;
};

export const getCompanyById = async (id: number): Promise<Company> => {
	const response = await axiosTractianApiInstance.get<Company>(
		`/companies/${id}`,
	);

	const units = await getAllUnits();
	const companyUnits = units.filter((unit) => unit.companyId === id);

	return {
		...response.data,
		...(companyUnits.length && { units: companyUnits }),
	};
};
