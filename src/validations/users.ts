import { type User } from "../interfaces/users";
import { isEmail } from "../utils/validations";

export const validateUser = (user: User): void => {
	if (
		!user.name.replace(/\s/g, "").length ||
		!user.email.replace(/\s/g, "").length ||
		!user.unitId ||
		(user.email && !isEmail(user.email))
	)
		throw Error("Invalid Required Fields");
};
