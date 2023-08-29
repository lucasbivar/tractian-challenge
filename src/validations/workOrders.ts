import type { WorkOrder } from "../interfaces/workOrders";

export const validateWorkOrder = (workOrder: WorkOrder): void => {
	if (
		!workOrder.title ||
		!workOrder.description ||
		!workOrder.status ||
		!workOrder.priority ||
		!workOrder.assetId
	)
		throw Error("Invalid Required Fields");
};
