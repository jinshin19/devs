import env from 'dotenv'
import express from 'express';
import formData from 'express-form-data';
import cors from 'cors';
import { devsRoutes } from '../routes/devs_routes';

env.config();

const PORT: (string | number )= process.env.PORT || 3400;
const app = express();
app.listen(PORT, (): void => console.log(`Server is running at port ${PORT}`));

app.use(express.json());
app.use(formData.parse());
app.use(cors( { origin: ["http://localhost:5173", "*"] } ));

app.use('/api', devsRoutes)