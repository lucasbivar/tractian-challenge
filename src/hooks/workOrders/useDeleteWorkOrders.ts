import { type UseMutationResult } from "@tanstack/react-query";
import { useDelete } from "../../utils/reactQuery";
import { type WorkOrder } from "../../interfaces/workOrders";
import { useWorkOrders } from "./useWorkOrders";

export const useDeleteWorkOrder = (): UseMutationResult<
	WorkOrder,
	unknown,
	WorkOrder,
	unknown
> => {
	return useDelete<WorkOrder>("workOrders", () => useWorkOrders({}));
};
