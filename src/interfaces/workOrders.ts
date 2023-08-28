import { type Asset } from "./assets";
import { type User } from "./users";

export interface TaskItem {
	completed: boolean;
	task: string;
}

export type Status = "not started" | "in progress" | "completed";

export type Priority = "low" | "medium" | "high";
export interface WorkOrder {
	assetId?: number;
	assignedUserIds?: number[];
	checklist?: TaskItem[];
	description: string;
	id: number;
	priority: Priority;
	status: Status;
	title: string;
	users?: User[];
	asset?: Asset;
}
