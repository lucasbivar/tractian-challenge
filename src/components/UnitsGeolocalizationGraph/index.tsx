import { type Unit } from "../../interfaces/units";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import HC_exporting from "highcharts/modules/exporting";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import proj4 from "proj4";
HighchartsMap(Highcharts);
HC_exporting(Highcharts);

interface UnitsGeolocalizationGraphProps {
	units?: Unit[];
}

export const UnitsGeolocalizationGraph = ({
	units,
}: UnitsGeolocalizationGraphProps): JSX.Element => {
	const unitsLocalizations: Array<{ id: string; lat?: number; lon?: number }> =
		units?.reduce(
			(
				localizations: Array<{ id: string; lat?: number; lon?: number }>,
				unit,
			) => {
				localizations.push({
					id: unit.name,
					lat: unit.geolocalization?.lat,
					lon: unit.geolocalization?.lon,
				});
				return localizations;
			},
			[],
		) ?? [];

	const options = {
		chart: {
			map: mapData,
			proj4,
		},
		title: {
			text: "",
		},
		mapNavigation: {
			enabled: true,
			buttonOptions: {
				alignTo: "right",
				verticalAlign: "top",
				horizontalAlign: "right",
			},
		},
		mapView: {
			padding: [0, 0, 85, 0],
		},
		plotOptions: {
			mappoint: {
				keys: ["id", "lat", "lon"],
				marker: {
					symbol: "mapmarker",
					radius: 6,
				},
				dataLabels: {
					enabled: false,
				},
			},
		},
		tooltip: {
			headerFormat: "",
			pointFormat:
				'<span style="color:{point.color}">\u25CF</span> {point.id}<br/>',
		},

		series: [
			{
				type: "map",
				mapData,
				borderColor: "#ffffff",
				nullColor: "#1A3071",
				showInLegend: false,
			},
			{
				type: "mappoint",
				name: "Units",
				color: "#8CA1FF",
				data: unitsLocalizations,
			},
		],
	};
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={options}
			constructorType={"mapChart"}
		/>
	);
};
