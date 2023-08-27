import { type UseMutationResult } from "@tanstack/react-query";
import { useCompanies } from "./useCompanies";
import { type Company } from "../../interfaces/companies";
import { useCreate } from "../../utils/reactQuery";

export const useCreateCompany = (): UseMutationResult<
	Company,
	unknown,
	Company,
	unknown
> => {
	return useCreate<Company>("companies", () => useCompanies({}));
};
