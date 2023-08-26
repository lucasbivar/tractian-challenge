import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllWorkOrders } from "../../services/workOrders";
import { type WorkOrder } from "../../interfaces/workOrders";

export const useUsers = (): UseQueryResult<WorkOrder[], Error> => {
	return useFetch<WorkOrder[]>("work-orders", getAllWorkOrders);
};
