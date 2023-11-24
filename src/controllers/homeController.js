import db from '../models/index'
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

let postCRUD = (req,res) =>{
    console.log(req.body)
    return res.send('post crud')
}
module.exports ={
    getHomePage:getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD
}