import { type UseMutationResult } from "@tanstack/react-query";
import { useDelete } from "../../utils/reactQuery";
import { useUnits } from "./useUnits";
import { type Unit } from "../../interfaces/units";

export const useDeleteUnit = (): UseMutationResult<
	Unit,
	unknown,
	Unit,
	unknown
> => {
	return useDelete<Unit>("units", () => useUnits({}));
};
