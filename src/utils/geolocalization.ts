import { type Geolocalization } from "../interfaces/units";

const generateNumberInInterval = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min) + min);

export const generateRandomFakeGeolocalization = (): Geolocalization => {
	return {
		lat: generateNumberInInterval(-18, -5),
		lon: generateNumberInInterval(-65, -36),
	};
};
