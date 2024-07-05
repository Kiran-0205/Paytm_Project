const zod = require('zod');

const PasswordSchema = zod.string()
                    .min(8, "Password must be at least 8 characters long")
                    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
                    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
                    .regex(/[0-9]/, "Password must contain at least one number")
                    .regex(/[@$!%*?&#]/, "Password must contain at least one special character");

const UserSchema = zod.string().min(6, "First name must be at least 6 characters long").max(30, "First name must be at most 30 characters long") 

const firstNameSchema = zod.string().min(1, "firstName to be minimum 1").max(50," firstName can be maximum 30");

const lastNameSchema = zod.string().min(1, " lastName to be minimum 1").max(50," lastName can be maximum 30 ");

module.exports = {
    UserSchema,
    PasswordSchema,
    firstNameSchema,
    lastNameSchema
}