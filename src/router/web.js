import express from "express"
import homeController from "../controllers/homeController";
import cartController from "../controllers/cartController";
let router = express.Router();

let initWebRoutes = (app) =>{
    router.get("/",(req,res) =>{
            return res.send("hello quang loc")
    })
    router.get("/cart",cartController.cartController)
    router.get("/quanglocdev",homeController.getHomePage)
    router.get("/crud",homeController.getCRUD)

    router.post("/post-crud",homeController.postCRUD)
    router.get("/get-crud",homeController.displayGetCRUD)
    
    router.get("/edit-crud",homeController.editGetCRUD)
    router.post("/put-crud",homeController.putCRUD)

    return app.use("/",router)
}
module.exports = initWebRoutes