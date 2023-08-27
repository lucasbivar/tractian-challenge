import { type UseMutationResult } from "@tanstack/react-query";
import { useUpdate } from "../../utils/reactQuery";
import { type WorkOrder } from "../../interfaces/workOrders";
import { useWorkOrders } from "./useWorkOrders";

export const useUpdateWorkOrder = (): UseMutationResult<
	WorkOrder,
	unknown,
	WorkOrder,
	unknown
> => {
	return useUpdate<WorkOrder>("workOrders", () => useWorkOrders({}));
};
