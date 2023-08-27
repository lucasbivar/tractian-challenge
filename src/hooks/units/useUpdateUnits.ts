import { type UseMutationResult } from "@tanstack/react-query";
import { useUpdate } from "../../utils/reactQuery";
import { useUnits } from "./useUnits";
import { type Unit } from "../../interfaces/units";

export const useUpdateUnit = (): UseMutationResult<
	Unit,
	unknown,
	Unit,
	unknown
> => {
	return useUpdate<Unit>("units", () => useUnits({}));
};
