import db from '../models/index'
let getHomePage = async(req,res) =>{
    try {
        let data = await db.User.findAll()
        console.log('------------')
        console.log(data)
        console.log('------------')
        return res.render('homepage.ejs')
        
    } catch (error) {
            console.log(error)
    }

}
// Object:{
//     key:'',
//     value:''
// }
module.exports ={
    getHomePage:getHomePage
}