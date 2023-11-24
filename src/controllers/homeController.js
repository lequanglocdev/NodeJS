import db from '../models/index'
import CRUDServices from '../services/CRUDServices'
let getHomePage = async(req,res) =>{
    try {
        let data = await db.User.findAll()
        console.log('------------')
        console.log(data)
        console.log('------------')
        return res.render('homepage.ejs',{
                data:JSON.stringify(data)
        })
        
    } catch (error) {
            console.log(error)
    }

}
let getCRUD = (req,res) =>{
    return res.render('crud.ejs')
}

// Object:{
//     key:'',
//     value:''
// }

let postCRUD = async(req,res) =>{
   const message =  await CRUDServices.createNewUser(req.body)
   console.log(message)
    return res.send('post crud')
}

let displayGetCRUD = async(req,res) =>{
    const dataUser = await CRUDServices.getAllUser()
    console.log('--------------------')
    console.log(dataUser)
    console.log('---------------------------')
    return res.render("displayCRUD.ejs",{
        dataTable:dataUser
    })
}
module.exports ={
    getHomePage:getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD
}