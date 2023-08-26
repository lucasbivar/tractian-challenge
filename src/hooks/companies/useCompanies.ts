import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllCompanies } from "../../services/companies";
import { type Company } from "../../interfaces/companies";

export const useCompanies = (): UseQueryResult<Company[], Error> => {
	return useFetch<Company[]>("companies", getAllCompanies);
};
