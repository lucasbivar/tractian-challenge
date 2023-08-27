import { type UseMutationResult } from "@tanstack/react-query";
import { useDelete } from "../../utils/reactQuery";
import { type Company } from "../../interfaces/companies";
import { useCompanies } from "./useCompanies";

export const useDeleteCompany = (): UseMutationResult<
	Company,
	unknown,
	Company,
	unknown
> => {
	return useDelete<Company>("companies", () => useCompanies({}));
};
