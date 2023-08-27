export const getHealthScoreInfo = (
	healthScore?: number,
): { status: string; color: string } => {
	if (healthScore == null)
		return { status: "No Information", color: "#1A3071" };
	if (healthScore < 70) return { status: "Need Maintenance", color: "#ED3833" };
	if (healthScore < 85) return { status: "In Risk", color: "#FAAD14" };

	return { status: "Correct Operation", color: "#52C41A" };
};
