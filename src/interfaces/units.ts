import { type Asset } from "./assets";
import { type Company } from "./companies";
import { type User } from "./users";

export interface Geolocalization {
	lat: number;
	lon: number;
}
export interface Unit {
	companyId?: number;
	id: number;
	name: string;
	image?: string;
	users?: User[];
	assets?: Asset[];
	company?: Company;
	geolocalization?: Geolocalization;
}
