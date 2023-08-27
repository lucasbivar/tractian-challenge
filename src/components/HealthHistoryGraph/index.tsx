import { type HealthDataItem } from "../../interfaces/assets";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TimelineSetup from "highcharts/modules/timeline";
import HC_exporting from "highcharts/modules/exporting";
import { assetStatus } from "../../utils/enums/assetStatus";
TimelineSetup(Highcharts);
HC_exporting(Highcharts);

interface HealthHistoryGraphProps {
	healthHistory?: HealthDataItem[];
}

export const HealthHistoryGraph = ({
	healthHistory,
}: HealthHistoryGraphProps): JSX.Element => {
	const history = healthHistory?.map((data) => ({
		name: assetStatus[data.status].label,
		description: new Date(data.timestamp).toLocaleString(),
	}));

	const colors = healthHistory?.map((data) => assetStatus[data.status].color);

	const options = {
		chart: {
			type: "timeline",
		},
		accessibility: {
			screenReaderSection: {
				beforeChartFormat:
					"<h5>{chartTitle}</h5>" +
					"<div>{typeDescription}</div>" +
					"<div>{chartSubtitle}</div>" +
					"<div>{chartLongdesc}</div>" +
					"<div>{viewTableButton}</div>",
			},
			point: {
				valueDescriptionFormat: "{index}. {point.label}. {point.description}.",
			},
		},
		xAxis: {
			visible: false,
		},
		yAxis: {
			visible: false,
		},
		title: {
			text: "",
		},
		dataLabels: {
			allowOverlap: false,
		},
		colors,
		series: [
			{
				data: history,
			},
		],
	};
	return <HighchartsReact highcharts={Highcharts} options={options} />;
};
