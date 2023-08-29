import { type User } from "../interfaces/users";
import { isEmail } from "../utils/users";

export const validateUser = (user: User): void => {
	if (
		user.name === "" ||
		user.email === "" ||
		user.unitId === undefined ||
		(user.email !== "" && !isEmail(user.email))
	)
		throw Error("");
};
