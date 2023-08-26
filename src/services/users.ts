import type { User } from "../interfaces/users";
import { axiosTractianApiInstance } from "../api/axios";

export const getAllUsers = async (): Promise<User[]> => {
	const response = await axiosTractianApiInstance.get<User[]>("/users");

	return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
	const response = await axiosTractianApiInstance.get<User>(`/users/${id}`);

	return response.data;
};
