const Product= require('../models/products')
const fs = require('fs');


// exports.dashboard= (req,res) =>{
//     res.render('dashboard',{result:result});
// }
exports.getAllProduct=async(req,res)=>{
    await Product.find().then(result=>{
        if(result){
            res.render('dashboard',{error:false,result:result});
        }
        else{
            res.render('dashboard',{error:false,result:false});
        }
    })
}
exports.displayClothes=async(req,res)=>{
    await Product.findById(req.params.id).then(result=>{
        if(result){
            res.render('clothes',{error:false,result:result});
        }
        else{
            res.render('clothes',{error:false,result:false});
        }
    })
}
exports.admin=async(req,res)=>{
    await Product.find().then(result=>{
        if(result){
            console.log(result);
            res.render('admin',{error:false,result:result});

        }else{
            res.render('admin',{error:false,result:false});
        }
    })
    
}
exports.createProduct=(req,res)=>{
    // console.log(req.body)
    // console.log(req.files)
    const file = req.files.img;
    // console.log(file);
    const path = "./publics/assets/storage/";
    const savepath = "/assets/storage/"+file.name;
    if(!fs.existsSync(path))fs.mkdirSync(path);
    dir = path+file.name;
    Product.findOne({productname:req.body.productname}).then(result=>{
        if(result){
            result.qty=req.body.qty;
            result.save().then(result=>res.redirect('/admin'))
            .catch(err=>res.redirect('/admin'));
        }else{
            file.mv(dir).then(result=>{
                const product = new Product({
                    img:savepath,
                    productname:req.body.productname,
                    qty:req.body.qty,
                    price:req.body.price,
                    detail:req.body.detail,
                    importDate:req.body.importDate,
                    category:req.body.category,
                })
                product.save().then(
                result=>{
                    res.redirect("/admin")
                }).catch(err=>{
                    console.log(err)
                    res.redirect("/admin")
                })
            })
        }
    })
}

exports.deleteProduct = (req,res)=>{
    const path="./publics"
    console.log(req.params.id)
    Product.findByIdAndRemove(req.params.id).then(result=>{
        fs.unlink(path+result.img);
        res.redirect("/admin")
    }).catch(err=>{
        res.redirect("/admin")
    })

}