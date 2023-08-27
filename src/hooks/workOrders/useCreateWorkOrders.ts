import { type UseMutationResult } from "@tanstack/react-query";
import { useCreate } from "../../utils/reactQuery";
import { type WorkOrder } from "../../interfaces/workOrders";
import { useWorkOrders } from "./useWorkOrders";

export const useCreateWorkOrder = (): UseMutationResult<
	WorkOrder,
	unknown,
	WorkOrder,
	unknown
> => {
	return useCreate<WorkOrder>("workOrders", () => useWorkOrders({}));
};
