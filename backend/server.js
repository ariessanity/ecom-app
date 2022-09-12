//dont forget .js in file name of module
import express from "express";
import dotenv from "dotenv";
import connetDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import {
  notFound,
  errorHandler,
} from "../backend/middleware/errorMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

connetDB();
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes); //to be link to product routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });
}

//ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`)
);
