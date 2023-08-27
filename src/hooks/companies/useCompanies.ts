import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllCompanies, getCompanyById } from "../../services/companies";
import { type Company } from "../../interfaces/companies";
import { arrayOfObjectsGeneralFilter } from "../../utils/manipulateDataStructures";

interface useCompaniesArgs {
	searchValue?: string;
}

export const useCompanies = ({
	searchValue,
}: useCompaniesArgs): UseQueryResult<Company[], Error> => {
	return useFetch<Company[]>("companies", getAllCompanies, {
		select: (items) =>
			arrayOfObjectsGeneralFilter<Company>(items, searchValue ?? ""),
	});
};

export const useCompany = (id: number): UseQueryResult<Company, Error> => {
	return useFetch<Company>(
		`company-${id}`,
		async () => await getCompanyById(id),
	);
};
