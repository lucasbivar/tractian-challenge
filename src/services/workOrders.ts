import type { WorkOrder } from "../interfaces/workOrders";
import { axiosTractianApiInstance } from "../api/axios";

export const getAllWorkOrders = async (): Promise<WorkOrder[]> => {
	const response =
		await axiosTractianApiInstance.get<WorkOrder[]>("/workorders");

	return response.data;
};

export const getWorkOrderById = async (id: string): Promise<WorkOrder> => {
	const response = await axiosTractianApiInstance.get<WorkOrder>(
		`/workorders/${id}`,
	);

	return response.data;
};
