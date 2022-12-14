import express from "express"
import router from "./routes/userRoutes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = 4000
const app = express()
const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

app.use(express.static("public"))
app.use(express.json())
app.use("/dogs", router)


function createApp(){
    try {
        app.listen(4000, () =>{console.log("Сервер запущен")})
    } catch (error) {
        console.log(error)
    }
}

createApp()