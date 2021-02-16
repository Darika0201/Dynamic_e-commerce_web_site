const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const productCon = require('../controllers/productsCon')

// router.get('/',productCon.dashboard);
router.get('/signin',authController.signIn);
router.get('/signup',authController.signUp);
// router.get('/clothes', authController.clothes);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/admin',productCon.admin);
router.post("/product",productCon.createProduct);
router.post("/product/:id",productCon.deleteProduct);
router.get("/",productCon.getAllProduct);
router.get("/clothes/:id",productCon.displayClothes);
// router.get('/If_exists',authController.If_exists);


// router.get('/signin',(req,res)=>{
//     res.render('signin');
    
// });
// router.get('/signup',(req,res)=>{
//     res.render('signup');
    
// });


module.exports = router;