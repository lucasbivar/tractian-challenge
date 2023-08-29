import { type WorkOrder } from "../interfaces/workOrders";
import { axiosTractianApiInstance } from "../api/axios";
import { getAllUsers } from "./users";
import { type User } from "../interfaces/users";
import { getObjIdAndEntity } from "../utils/manipulateDataStructures";
import { getAllAssets } from "./assets";
import { type Asset } from "../interfaces/assets";

const populateWorkOrders = async (data: WorkOrder[]): Promise<WorkOrder[]> => {
	const users = await getAllUsers();
	const userById = getObjIdAndEntity<User>(users);

	const assets = await getAllAssets();
	const assetById = getObjIdAndEntity<Asset>(assets);

	return data.map((workOrder) => {
		const woUsers: User[] = [];
		workOrder.assignedUserIds?.forEach((id) => woUsers.push(userById[id]));
		return {
			...workOrder,
			...(woUsers.length && { users: woUsers }),
			...(workOrder.assetId &&
				assetById[workOrder.assetId] && {
					asset: assetById[workOrder.assetId],
				}),
		};
	});
};

export const getAllWorkOrders = async (): Promise<WorkOrder[]> => {
	const response =
		await axiosTractianApiInstance.get<WorkOrder[]>("/workorders");

	const populatedWorkOrders = await populateWorkOrders(response.data);

	return populatedWorkOrders;
};

export const getWorkOrderById = async (id: string): Promise<WorkOrder> => {
	const response = await axiosTractianApiInstance.get<WorkOrder>(
		`/workorders/${id}`,
	);

	return response.data;
};
