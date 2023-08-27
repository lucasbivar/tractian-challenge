import { type Unit } from "./units";

export interface Company {
	id: number;
	name: string;
	units?: Unit[];
}
