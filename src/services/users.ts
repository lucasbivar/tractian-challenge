import type { User } from "../interfaces/users";
import { axiosTractianApiInstance } from "../api/axios";
import { getAllCompanies } from "./companies";
import { getAllUnits } from "./units";
import { type Company } from "../interfaces/companies";
import { type Unit } from "../interfaces/units";
import { getObjIdAndEntity } from "../utils/manipulateDataStructures";

const populateUsers = async (data: User[]): Promise<User[]> => {
	const companies = await getAllCompanies();
	const companiesObj = getObjIdAndEntity<Company>(companies);

	const units = await getAllUnits();
	const unitsObj = getObjIdAndEntity<Unit>(units);

	return data.map((user) => ({
		...user,
		...(user.companyId != null && {
			companyName: companiesObj[user.companyId].name,
		}),
		...(user.unitId != null && {
			unitName: unitsObj[user.unitId].name,
		}),
	}));
};

export const getAllUsers = async (): Promise<User[]> => {
	const { data } = await axiosTractianApiInstance.get<User[]>("/users");
	const populatedUsers = await populateUsers(data);

	return populatedUsers;
};

export const getUserById = async (id: string): Promise<User> => {
	const response = await axiosTractianApiInstance.get<User>(`/users/${id}`);

	return response.data;
};
