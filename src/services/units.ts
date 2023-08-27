import type { Geolocalization, Unit } from "../interfaces/units";
import { axiosTractianApiInstance } from "../api/axios";
import { getAllAssets } from "./assets";
import { getAllUsers } from "./users";
import { getCompanyById } from "./companies";

export const urlFakeUnitImage =
	"https://lh3.googleusercontent.com/p/AF1QipMEHk-PfFIzK1mVIdaDaSdjl2fzVxO_b_ymt3Kv=s1360-w1360-h1020";

export const fakeGeolocalizations: Geolocalization[] = [
	{
		lat: -7.069378,
		lon: -34.637298,
	},
	{
		lat: -17.675428,
		lon: -55.042005,
	},
	{
		lat: -12.055437,
		lon: -43.686212,
	},
	{
		lat: -23.329646,
		lon: -48.738786,
	},
	{
		lat: -5.886528,
		lon: -59.116661,
	},
	{
		lat: -26.20227,
		lon: -58.413076,
	},
];

export const getAllUnits = async (): Promise<Unit[]> => {
	const response = await axiosTractianApiInstance.get<Unit[]>("/units");
	return response.data?.map((unit) => ({
		...unit,
		image: urlFakeUnitImage,
		geolocalization:
			fakeGeolocalizations[(fakeGeolocalizations.length * Math.random()) | 0],
	}));
};

const populateUnit = async (unit: Unit): Promise<Unit> => {
	const assets = await getAllAssets();
	const assetsFiltered = assets.filter((asset) => asset.unitId === unit.id);

	const users = await getAllUsers();
	const usersFiltered = users.filter((user) => user.unitId === unit.id);

	const company =
		unit.companyId != null ? await getCompanyById(unit.companyId) : null;

	return {
		...unit,
		image: urlFakeUnitImage,
		...(assetsFiltered.length !== 0 && { assets: assetsFiltered }),
		...(usersFiltered.length !== 0 && { users: usersFiltered }),
		...(company != null && { company }),
	};
};

export const getUnitById = async (id: number): Promise<Unit> => {
	const response = await axiosTractianApiInstance.get<Unit>(`/units/${id}`);

	const populatedUnit = await populateUnit(response.data);

	return populatedUnit;
};
