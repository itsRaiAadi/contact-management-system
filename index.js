import express from "express";
import connectDb from "./config/database.js";
import ContactRouters from "./routes/contacts.routes.js";
const app = express();

const port = process.env.PORT;

// Database Connection
connectDb();

// Middlewares
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.use("/", ContactRouters);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
