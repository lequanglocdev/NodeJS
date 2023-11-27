import db from "../models/index";
import CRUDServices from "../services/CRUDServices";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("------------");
    console.log(data);
    console.log("------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

// Object:{
//     key:'',
//     value:''
// }

let postCRUD = async (req, res) => {
  const message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send("post crud");
};

let displayGetCRUD = async (req, res) => {
  const dataUser = await CRUDServices.getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: dataUser,
  });
};
let editGetCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDServices.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
 let allUsers =  await CRUDServices.updateUserData(data);
 return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });

};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  editGetCRUD: editGetCRUD,
  putCRUD: putCRUD,
};
