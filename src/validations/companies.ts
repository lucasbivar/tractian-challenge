import { type Company } from "../interfaces/companies";

export const validateCompany = (company: Company): void => {
	if (!company.name.replace(/\s/g, "").length)
		throw Error("Invalid Required Fields");
};
