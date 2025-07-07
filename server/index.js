import express from "express";
import cors from "cors";
import newsRoute from "./newsroute.js"; // or ./newsroute.js

const app = express();
app.use(cors());
app.use("/api", newsRoute); // ✅ this creates /api/anime route

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});