const express= require('express');

const UserController = require('../../controllers/user-controller');
const {AuthRequestValidators} =require('../../middlewares/index');
const { validateUserAuth } = require('../../middlewares/auth-request-validators');
const router= express.Router();

router.post('/signup',
AuthRequestValidators.validateUserAuth,
UserController.create

);
router.post('/signin',
AuthRequestValidators.validateUserAuth
,UserController.signIn);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
)

module.exports= router;