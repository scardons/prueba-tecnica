import express from "express";
import routes from "./interfaces/routes/routes";

const app = express();

app.use(express.json());
app.use("/api", routes);

export default app;
