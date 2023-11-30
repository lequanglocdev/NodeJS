import express from "express"
import homeController from "../controllers/homeController";
import userController from '../controllers/userController.js'
let router = express.Router();

let initWebRoutes = (app) =>{
    router.get("/",(req,res) =>{
            return res.send("hello quang loc")
    })
    router.get("/quanglocdev",homeController.getHomePage)
    router.get("/crud",homeController.getCRUD)

    router.post("/post-crud",homeController.postCRUD)
    router.get("/get-crud",homeController.displayGetCRUD)
    
    router.get("/edit-crud",homeController.editGetCRUD)
    router.post("/put-crud",homeController.putCRUD)
    router.get("/delete-crud",homeController.deleteCRUD)

    // -------------------------

    router.post('/api/login',userController.handleLogin)

    return app.use("/",router)
}
module.exports = initWebRoutes