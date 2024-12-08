import express from 'express';
import {body} from 'express-validator';
import { authUser } from '../middlewares/auth.middleware.js';

import {registerUser,loginUser,getUserProfile} from '../Controlers/user.controler.js';


const router = express.Router();

router.post("/register",[
    body('email').isEmail().withMessage("Invaliid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be atleeast 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long")
],
    registerUser
)

router.post("/login",[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long")
],
    loginUser
)

router.get("/profile",authUser,getUserProfile)

export default router;
