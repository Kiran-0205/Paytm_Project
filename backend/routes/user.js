const express = require('express');
const router = express.Router();
const zod = require('zod');
const { UserSchema, PasswordSchema, firstNameSchema, lastNameSchema } = require('./validation');
const { User } = require('../db');
const { JWT_SECRET } = require('../config');

const signUpBody = zod.object({
    username: UserSchema,
    password: PasswordSchema,
    firstName: firstNameSchema,
    lastName: lastNameSchema
})

router.post('/signup', async (req, res) => {
   const { success } = signUpBody.safeParse(req.body);
   if(!success) {
    return res.send(411).json({
        message: "Incorrect Inputs"
    })
   }  
   const existingUser = await User.findOne({
        username: req.body.username
   })

   if(existingUser){
        return res.status(411).json({
            message: "Username already taken"
        })
   }

   const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
   })

   const userId = user._id;

   const token = jwt.sign(userId, JWT_SECRET);

   res.json({
    message: "User created succesfully",
    token: token
   })

})

module.exports = {
    router
}