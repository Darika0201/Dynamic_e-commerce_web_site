
function validator(event){
    event.preventDefault() //to prevent link to another url or page
    // const form = new FormData(document.querySelector("form"))
    // let dataSubmit={}
    var pw=document.getElementById("pwsd").value;
    var com_pw=document.getElementById("confirm_password").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    // for (const pair of form) {
    //     console.log(pair)
    //     dataSubmit[pair[0]]= pair[1]
    // }
    // console.log(dataSubmit)
    // var pw = dataSubmit['password'];


    if(pw != com_pw){
        // let message=document.createElement("div").innerHTML="password is not match"
        //     document.body.append(message)
        document.getElementById("message").innerHTML = "Password doesn't match";
    }
    else if(pw==""){
            document.getElementById("message").innerHTML = "Fill the password please!";
        }
    else if (pw.length<3){
        document.getElementById("message").innerHTML = "Password must be at least 3 characters";
    }
    else if(pw.length>15){
        document.getElementById("message").innerHTML = "Password must not be exceed 15 characters";
    }
    else if (pw==com_pw){ 
        axios.post("http://localhost:3000/register/",{username:username,email:email,password:pw}).then(result=>{
            // document.body.innerHTML=result.data
            // history.pushState(result.data,"signin","/signin")
            // console.log(result);
            if(result.data.email){
                document.getElementById("message1").innerHTML="Email already exists";
            }
            else{
                window.location.pathname="/signin"
            }
        }).catch(err=>{
            console.log("error")
        })
    }
        
}




  