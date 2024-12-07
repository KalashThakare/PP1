import express from 'express';
import {body} from 'express-validator';
import userControler from '../Controlers/user.controler.js';
import registerUser from '../Controlers/user.controler.js';


const router = express.Router();

router.post("/register",[
    body('email').isEmail().withMessage("Invaliid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be atleeast 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long")
],
    registerUser
)

export default router;
