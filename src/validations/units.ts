import { type Unit } from "../interfaces/units";

export const validateUnit = (unit: Unit): void => {
	if (!unit.name) throw Error("Invalid Required Fields");
};
