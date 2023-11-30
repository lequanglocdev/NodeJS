import UserServices from '../services/UserServices'

let handleLogin =async (req,res) =>{
    let email = req.body.email
    let password = req.body.password
    console.log('email:',email, 'password:',password)

// if(email !== '' || email === nul || email === 'underfine') = if(!email)

if(!email || !password){
    return res.status(500).json({
        errorCode:1,
        message:'Missing input parameter '
    })
}

let userData = await UserServices.handleUserLogin(email,password)
console.log(userData)
    return res.status(200).json({
        errorCode:userData.errorCode,
        message:userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
module.exports = {
    handleLogin:handleLogin
  };