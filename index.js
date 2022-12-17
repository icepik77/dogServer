import express from "express";
import router from "./routes/userRoutes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { showUsersController } from "./controllers/userController.js";

const PORT = 4000
export const app = express()
const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

app.set("view engine", "hbs")
app.use(express.static("views"))
app.use(express.json())
app.use("/dogs", router)
app.use("/users", async function(_, res){
    const users  = await showUsersController()
    res.render("Users/users.hbs", {user: users})
})



function createApp(){
    try {
        app.listen(4000, () =>{console.log("Сервер запущен")})
    } catch (error) {
        console.log(error)
    }
}

createApp()