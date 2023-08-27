import { type WorkOrder } from "../../interfaces/workOrders";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import HC_exporting from "highcharts/modules/exporting";
HighchartsMap(Highcharts);
HC_exporting(Highcharts);

interface WorkOrdersGraphProps {
	workOrders?: WorkOrder[];
}

export const WorkOrdersGraph = ({
	workOrders,
}: WorkOrdersGraphProps): JSX.Element => {
	const quantities = [
		{
			name: "Completed",
			y: 0,
			color: "#52C41A",
		},
		{
			name: "In Progress",
			y: 0,
			color: "#FAAD14",
		},
		{
			name: "Not Started",
			y: 0,
			color: "#8CA1FF",
		},
	];

	const indexOfKeys: Record<string, number> = {
		completed: 0,
		"in progress": 1,
		"not started": 2,
	};

	workOrders?.forEach((workOrder) => {
		const index = indexOfKeys[workOrder.status];
		if (index != null) {
			quantities[index].y += 1;
		}
	});

	const options = {
		chart: {
			type: "column",
		},
		title: {
			text: "",
		},
		legend: { enabled: false },
		xAxis: {
			categories: ["Completed", "In Progress", "Not Started"],
			crosshair: true,
		},
		yAxis: {
			min: 0,
			title: {
				text: "Quantity",
			},
		},
		series: [
			{
				minPointSize: 20,
				innerSize: "100%",
				zMin: 0,
				name: "Work Orders Status",
				borderRadius: 0,
				tooltip: {
					headerFormat: "",
					pointFormat:
						'<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
						"Quantity: <b>{point.y}</b><br/>",
				},
				data: quantities,
			},
		],
	};
	return (
		<HighchartsReact
			containerProps={{ style: { height: "100%" } }}
			highcharts={Highcharts}
			options={options}
			constructorType={"chart"}
		/>
	);
};
