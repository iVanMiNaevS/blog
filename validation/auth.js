import { body } from "express-validator";

export const authValidation = [
	body("fullName").isLength({ min: 3 }),
	body("password").isLength({ min: 5 }),
	body("email").isEmail(),
	body("avatarUrl").optional().isURL(),
];
