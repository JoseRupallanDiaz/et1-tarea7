import express from "express";
import studentRouter from "./src/routes/student.router.js"
import operationRouter from "./src/routes/operation.router.js"
import {PORT} from "./src/configs/environment.js"

const app = express();

app.use(express.json());

app.use("/operations", operationRouter)
app.use("/", studentRouter)

app.listen(PORT, () => {
    console.log("Server started on PORT "+PORT)
})