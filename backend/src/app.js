import cors from 'cors';
import express from 'express';
import adminRoutes from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.use('/public/temp',express.static("public/temp"))
app.use(cors(
    {
        origin : ["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credential : true
    }
))
app.use('/user',userRouter)
app.use('/admin',adminRoutes);
export { app };
