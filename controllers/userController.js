import { createUser, showUsers, updateUser, deleteUser } from "../services/userServices.js";
import { __dirname } from "../index.js";

export async function createUserController(req, res){
    if (req.body){
        const {name, mail, messageRows} = req.body
        const user = await createUser(name, mail, messageRows)
        res.sendFile(__dirname+"/public/Dogs/guard.html")
    }
    else{
        console.log("Данные из формы не получены")
    }
    
    
}

export async function showUsersController(req, res){
    const users = showUsers()
    res.json(users)
}

export async function updateUserController(req, res){
    const {name, mail, message, id} = req.body
    const user = updateUser(name, mail, message, id)
}


export async function deleteUserController(req, res){
    const id = req.params.id
    deleteUser(id)
}