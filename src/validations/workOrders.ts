import type { WorkOrder } from "../interfaces/workOrders";

export const validateWorkOrder = (workOrder: WorkOrder): void => {
	if (
		!workOrder.title.replace(/\s/g, "").length ||
		!workOrder.description.replace(/\s/g, "").length ||
		!workOrder.status ||
		!workOrder.priority ||
		!workOrder.assetId
	)
		throw Error("Invalid Required Fields");
};
