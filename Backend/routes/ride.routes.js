import express from 'express';
import {body} from 'express-validator';
import { createRide } from '../Controlers/ride.controler';

const router=express.Router();

router.post('/create',
    body('userId').isString().isLength({min:24,max:24}).withMessage('Invalid user id'),
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid vehicle type'),
    createRide
)