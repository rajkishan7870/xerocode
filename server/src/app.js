const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/conn")
const useRoutes = require("../routes/userRoutes")

dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended : "true"}))

app.use("/api/user", useRoutes);

app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`)
});


