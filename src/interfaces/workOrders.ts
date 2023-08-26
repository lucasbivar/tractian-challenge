interface TaskItem {
	completed: boolean;
	task: string;
}

export interface WorkOrder {
	assetId: number;
	assignedUserIds?: number[];
	checklist: TaskItem[];
	description: string;
	id: number;
	priority: string;
	status: string;
	title: string;
}
