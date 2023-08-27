import { type UseMutationResult } from "@tanstack/react-query";
import { useCreate } from "../../utils/reactQuery";
import { useUnits } from "./useUnits";
import { type Unit } from "../../interfaces/units";

export const useCreateUnit = (): UseMutationResult<
	Unit,
	unknown,
	Unit,
	unknown
> => {
	return useCreate<Unit>("units", () => useUnits({}), "unit");
};
