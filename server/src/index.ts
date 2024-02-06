import env from 'dotenv'
import express from 'express';
import formData from 'express-form-data';
import cors from 'cors';

env.config();

const PORT: (string | number )= process.env.PORT || 3400;
const app = express();
app.listen(PORT, (): void => console.log("Server is running"));

app.use(express.json());
app.use(formData.parse());
app.use(cors( { origin: ["http://localhost:5173", "*"] } ));
