import express from 'express';
const router = express.Router();
import { loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);



export default router;