import express from 'express';
import cors from "cors"
import newsRoute from "./newsroute.js"

const app = express();
app.use(cors());
app.use('/api', newsRoute);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});