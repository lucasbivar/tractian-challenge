import { type UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "../../utils/reactQuery";
import { getAllWorkOrders } from "../../services/workOrders";
import { type WorkOrder } from "../../interfaces/workOrders";
import { arrayOfObjectsGeneralFilter } from "../../utils/manipulateDataStructures";

interface useWorkOrdersArgs {
	searchValue?: string;
}

export const useWorkOrders = ({
	searchValue,
}: useWorkOrdersArgs): UseQueryResult<WorkOrder[], Error> => {
	return useFetch<WorkOrder[]>("workOrders", getAllWorkOrders, {
		select: (items) =>
			arrayOfObjectsGeneralFilter<WorkOrder>(items, searchValue ?? ""),
	});
};
