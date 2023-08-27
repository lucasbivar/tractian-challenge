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
		label: assetStatus[data.status].label,
		name: new Date(data.timestamp).toLocaleString(),
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
		colors,
		series: [
			{
				tooltip: {
					headerFormat: "",
					pointFormat:
						'<span style="color:{point.color}">\u25CF</span> <b> {point.label}</b><br/>' +
						"{point.name}<br/>",
				},
				dataLabels: {
					allowOverlap: false,
					alternate: true,
					format:
						'<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
						"{point.label:%d %b %Y}</span><br/>{point.name}",
				},
				data: history,
			},
		],
	};
	return <HighchartsReact highcharts={Highcharts} options={options} />;
};
