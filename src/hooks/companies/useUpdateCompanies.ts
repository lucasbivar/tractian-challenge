import { type UseMutationResult } from "@tanstack/react-query";
import { useCompanies } from "./useCompanies";
import { type Company } from "../../interfaces/companies";
import { useUpdate } from "../../utils/reactQuery";

export const useUpdateCompany = (): UseMutationResult<
	Company,
	unknown,
	Company,
	unknown
> => {
	return useUpdate<Company>("companies", () => useCompanies({}));
};
