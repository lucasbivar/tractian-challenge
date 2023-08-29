import { type Models } from "../interfaces/assets";

export const getFakeImage = (model: Models): string => {
	if (model === "motor")
		return "https://bimgix.tractian.com/motor-eletrico.png";

	if (model === "fan") return "https://bimgix.tractian.com/Ventilador-1.png";

	return "";
};
