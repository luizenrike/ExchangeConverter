import express, {Request, Response} from "express";
import  UserRouter from "./routes/UserRouter";

const app = express();
const PORT = process.env.PORT || 2500;

app.use(express.json());
app.use('/api', UserRouter);

app.listen(PORT, () => {
    console.log("API operando na porta " + PORT);
})