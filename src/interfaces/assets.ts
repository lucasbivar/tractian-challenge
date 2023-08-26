interface Metrics {
	lastUptimeAt: Date;
	totalCollectsUptime: number;
	totalUptime: number;
}

type Status =
	| "inAlert"
	| "inDowntime"
	| "inOperation"
	| "plannedStop"
	| "unplannedStop";

interface HealthDataItem {
	status: Status;
	timestamp: Date;
}

interface Specifications {
	maxTemp: number;
	power?: number;
	rpm?: number;
}

export interface Asset {
	assignedUserIds?: number[];
	companyId?: number;
	healthHistory: HealthDataItem[];
	healthscore: number;
	id: number;
	image: string;
	metrics: Metrics;
	model: string;
	name: string;
	sensors: string[];
	specifications: Specifications;
	status: string;
	unitId?: number;
}
