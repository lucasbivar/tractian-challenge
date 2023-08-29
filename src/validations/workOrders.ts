import type { Priority, Status, WorkOrder } from "../interfaces/workOrders";

export const validateWorkOrder = (workOrder: WorkOrder): void => {
	if (
		workOrder.title === "" ||
		workOrder.description === "" ||
		workOrder.status === ("" as Status) ||
		workOrder.priority === ("" as Priority) ||
		workOrder.assetId == null
	)
		throw Error("");
};
