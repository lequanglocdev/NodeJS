import express from "express"
import homeController from "../controllers/homeController";
import cartController from "../controllers/cartController";
let router = express.Router();

let initWebRoutes = (app) =>{
    router.get("/",(req,res) =>{
            return res.send("hello quang loc")
    })
    router.get("/quanglocdev",homeController.getHomePage)
    router.get("/cart",cartController.cartController)
    return app.use("/",router)
}
module.exports = initWebRoutes