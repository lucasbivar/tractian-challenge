import { type Unit } from "../interfaces/units";

export const validateUnit = (unit: Unit): void => {
	if (!unit.name.replace(/\s/g, "").length)
		throw Error("Invalid Required Fields");
};
