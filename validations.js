import { body } from "express-validator";

export const loginValidation = [
	body("password").isLength({ min: 5 }),
	body("email").isEmail(),
];

export const registerValidation = [
	body("fullName").isLength({ min: 3 }),
	body("password").isLength({ min: 5 }),
	body("email").isEmail(),
	body("avatarUrl").optional().isURL(),
];
export const postCreateValidation = [
	body("title").isLength({ min: 3 }).isString(),
	body("text").isLength({ min: 3 }).isString(),
	body("tags").optional().isString(),
	body("avatarUrl").optional().isString(),
];
