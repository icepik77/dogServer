import { create, show, update, deleteItem } from "../models/dogUserRequests.js";

export function createUser(name, mail, message){
    const user = create(name, mail, message)
    console.log("create user info:"+user)
}

export function showUsers(){
    const users = show()
    console.log("users info:"+users)
    return users
}

export function updateUser(name, mail, message, id){
    const user = update(name, mail, message, id)
    console.log("update user info:"+user)
}

export function deleteUser(id){
    deleteItem(id)
    console.log('user deleted info')
}
 

