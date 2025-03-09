
import express from 'express'
import  {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay} from '../controllers/userController.js'
import userAuth from '../Middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser); //http://localhost:4000/api/user/register -whenever this url executes then register user will apply
userRouter.post('/login', loginUser);  //http://localhost:4000/api/user/login -whenever this url executes then register user will apply
userRouter.get('/credits', userAuth, userCredits)
userRouter.post('/pay-razor', userAuth, paymentRazorpay)
userRouter.post('/verify-razor', verifyRazorpay)
export default userRouter