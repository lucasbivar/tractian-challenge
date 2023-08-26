import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllUnits } from "../../services/units";
import { type Unit } from "../../interfaces/units";

export const useUnits = (): UseQueryResult<Unit[], Error> => {
	return useFetch<Unit[]>("units", getAllUnits);
};
