import type { Unit } from "../interfaces/units";
import { axiosTractianApiInstance } from "../api/axios";
import { getAllAssets } from "./assets";
import { getAllUsers } from "./users";
import { getAllCompanies, getCompanyById } from "./companies";
import { getObjIdAndEntity } from "../utils/manipulateDataStructures";
import { type Company } from "../interfaces/companies";
import { generateRandomFakeGeolocalization } from "../utils/geolocalization";

export const urlFakeUnitImage =
	"https://lh3.googleusercontent.com/p/AF1QipMEHk-PfFIzK1mVIdaDaSdjl2fzVxO_b_ymt3Kv=s1360-w1360-h1020";

const populateAllUnits = async (data: Unit[]): Promise<Unit[]> => {
	const companies = await getAllCompanies();
	const companiesObj = getObjIdAndEntity<Company>(companies);

	return data?.map((unit) => ({
		...unit,
		...(unit.companyId != null && { company: companiesObj[unit.companyId] }),
		image: urlFakeUnitImage,
		geolocalization: generateRandomFakeGeolocalization(),
	}));
};

export const getAllUnits = async (): Promise<Unit[]> => {
	const response = await axiosTractianApiInstance.get<Unit[]>("/units");

	const populatedUnits = await populateAllUnits(response.data);

	return populatedUnits;
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
