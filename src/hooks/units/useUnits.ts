import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllUnits, getUnitById } from "../../services/units";
import { type Unit } from "../../interfaces/units";
import { arrayOfObjectsGeneralFilter } from "../../utils/manipulateDataStructures";

interface useUnitsArgs {
	searchValue?: string;
}

export const useUnits = ({
	searchValue,
}: useUnitsArgs): UseQueryResult<Unit[], Error> => {
	return useFetch<Unit[]>("units", getAllUnits, {
		select: (items) =>
			arrayOfObjectsGeneralFilter<Unit>(items, searchValue ?? ""),
	});
};

export const useUnit = (id: number): UseQueryResult<Unit, Error> => {
	return useFetch<Unit>(`units-${id}`, async () => await getUnitById(id));
};
