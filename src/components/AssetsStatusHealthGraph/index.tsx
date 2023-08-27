import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from "highcharts/modules/exporting";
import variablePie from "highcharts/modules/variable-pie";
import { type Asset } from "../../interfaces/assets";
variablePie(Highcharts);
HC_exporting(Highcharts);

interface AssetsStatusHealthGraphProps {
	assets?: Asset[];
}

export const AssetsStatusHealthGraph = ({
	assets,
}: AssetsStatusHealthGraphProps): JSX.Element => {
	const quantities = [
		{
			name: "In Operation",
			y: 0,
			z: 0,
			color: "#52C41A",
		},
		{
			name: "Unplanned Stop",
			y: 0,
			z: 0,
			color: "#FAAD14",
		},
		{
			name: "In Alert",
			y: 0,
			z: 0,
			color: "#ED3833",
		},
		{
			name: "Planned Stop",
			y: 0,
			z: 0,
			color: "#8CA1FF",
		},
		{
			name: "In Downtime",
			y: 0,
			z: 0,
			color: "#D7D7D7",
		},
	];

	const indexOfKeys: Record<string, number> = {
		inOperation: 0,
		unplannedStop: 1,
		inAlert: 2,
		plannedStop: 3,
		inDowntime: 4,
	};
	assets?.forEach((asset) => {
		const index = indexOfKeys[asset.status];
		if (index != null) {
			quantities[index].y += 1;
			quantities[index].z += 1;
		}
	});

	const options = {
		chart: {
			type: "variablepie",
		},
		title: {
			text: "",
		},
		series: [
			{
				minPointSize: 20,
				innerSize: "80%",
				zMin: 0,
				name: "Assets Status",
				borderRadius: 0,
				tooltip: {
					headerFormat: "",
					pointFormat:
						'<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
						"Machines: <b>{point.y}</b><br/>",
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
