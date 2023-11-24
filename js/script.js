
let btn = document.querySelector(".sub_btn")
let nam = document.querySelector(".namee")
let emailvalu = document.querySelector(".email")
let pass = document.querySelector(".password")
let conpass = document.querySelector(".confiem_password")

let nerr = document.querySelector(".error_name")
let email = document.querySelector(".error_email")
let envaliemail = document.querySelector(".envalit_email")
let passerr = document.querySelector(".error_password")
// let normalpass = document.querySelector(".normal_password")
let conpasserr = document.querySelector(".error_confiem_password")

let valitedEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let passwordExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

btn.addEventListener("click",(e)=>{
  e.preventDefault()
  if(!nam.value){
    nerr.innerHTML = "Enter Your Name";
  }else{
    nerr.innerHTML = "";
  }
  if(!emailvalu.value){
    email.innerHTML = "Enter Your Email";
  }else{
    if(emailvalu.value.match(valitedEmail)){
        email.innerHTML = "";
    }else{
      envaliemail.innerHTML = "Envalited Email"
    }
    email.innerHTML = "";
  }
  if(!pass.value){
    passerr.innerHTML = "Enter Your password";
  }else{
    if(pass.value.match(passwordExpression)){
         passerr.innerHTML = "";
    }else{
        // normalpass.innerHTML = ""
        passerr.innerHTML = "Normal Password";
    }
  }
  if(!conpass.value){
    conpasserr.innerHTML = "Enter Your Confrome Password";
  }else{
    if(pass.value == conpass.value){
        conpasserr.innerHTML = "";
    } else{
     conpasserr.innerHTML = "Don't Match" ;
  }
    
  }
 
})



// Mode =================================


let blkbtn = document.querySelector(".black_mode")
let redbtn = document.querySelector(".red_mode")
let grnbtn = document.querySelector(".green_mode")

let body = document.querySelector("body")

blkbtn.addEventListener("click",function(){
  body.classList.toggle("blackk");
  body.classList.remove("redd");
  body.classList.remove("greenn");

});


redbtn.addEventListener("click",function(){
  body.classList.add("redd");
  body.classList.remove("greenn");
  body.classList.remove("blackk");
});


grnbtn.addEventListener("click",function(){
  body.classList.add("greenn");
   body.classList.remove("redd");
   body.classList.remove("blackk");
});
