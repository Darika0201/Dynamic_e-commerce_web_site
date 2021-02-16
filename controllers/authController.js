const User = require('../models/users');
const bcrypt = require("bcrypt");

exports.signIn= (req,res) =>{
    res.render('signin',{error:false});
}
exports.signUp= (req,res) =>{
    res.render('signup');
}

exports.clothes=(req,res)=>{
  res.render('clothes');
}

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({email: email}).then(result => {
      if(result) {
        bcrypt.compare(password, result[0].password, function(err, passwordIsMatch) {
          if(passwordIsMatch) {
            res.redirect("/admin");
          } 
          else {
            res.render("signin", {error: true, message: "Incorrect passowrd"});
          }
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

exports.register = (req,res) =>{
   const username= req.body.username;
   const password= req.body.password;
   const email= req.body.email;
  //  const confirm_password = req.body.confirm_password;
   const date = new Date();
   const salt = bcrypt.genSaltSync(10);


  User.findOne({email:email}).then(result=>{
    if(result){
      res.json({email: true});
    }
    else{
      const user = new User({
        username: username,
        email: email,
        password: bcrypt.hashSync(password,salt),
        registerAt: date.toISOString()
      })
      user.save().then(result=>{
      //    console.log("save")
          // res.redirect('/signin');
          res.json({email:false});
      }).catch(err =>{
          console.log(err)
          res.render('signup',{message: "Signup fail, try again"});
      });
    }
    
  })

  // if(check_unique==true){
  //   console.log(check_unique);
    
  // }
  
}