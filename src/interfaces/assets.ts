interface Metrics {
	lastUptimeAt: string;
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
	timestamp: string;
}

interface Specifications {
	maxTemp: number;
	power?: number;
	rpm?: number;
}

type Models = "motor" | "fan";

export interface Asset {
	assignedUserIds?: number[];
	companyId?: number;
	healthHistory: HealthDataItem[];
	healthscore: number;
	id: number;
	image: string;
	metrics: Metrics;
	model: Models;
	name: string;
	sensors: string[];
	specifications: Specifications;
	status: Status;
	unitId?: number;
}
