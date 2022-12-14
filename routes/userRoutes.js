import Router from "express";
import express from "express"

import { createUserController, deleteUserController, showUsersController, updateUserController } from "../controllers/userController.js";

const urlencodedParser = express.urlencoded({extended: false})

const router = new Router()

router.post("/guard", urlencodedParser, createUserController )
router.get("Some/some", showUsersController)
router.put("some/some", updateUserController)
router.delete("some/some", deleteUserController)

export default router