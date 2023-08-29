import { type Company } from "../interfaces/companies";

export const validateCompany = (company: Company): void => {
	if (!company.name) throw Error("Invalid Required Fields");
};
