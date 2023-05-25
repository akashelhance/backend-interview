const { Router } = require('express');
const userController = require("../controllers/userController.js")

const router = Router();


const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});


const createUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email:Joi.string().email().required(),
    phone:Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'number.min': 'Mobile number should be 10 digit.',
        'number.max': 'Mobile number should be 10 digit'
    }),
    address: Joi.string().min(1).max(2500).required(),
    company: Joi.string().min(1).max(2500).required(),
})





router.get('/', (req, res) => res.json({"message": "Api Route"}))

router.post('/createuser',validator.body(createUserSchema), userController.createUserController);
router.get('/user', userController.getAllUserController);
router.get('/user/:UserId', userController.getUserControllerById);
router.put('/user/:UserId', userController.updatUserController );
router.delete('/user/:UserId', userController.deleteUserController);
// , validator.body(createUserSchema)


module.exports = router;