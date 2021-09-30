function page1(){
    var username=document.forms["loginform"]["username"].value;
    var password=document.forms["loginform"]["password"].value;

    if(username==null || username==""){
        document.getElementById("errorbox").innerHTML="Enter The Username!!"
        return false;
    }
    if(password==null || password==""){
        document.getElementById("errorbox").innerHTML="Enter The Password!!"
        return false;
    }
    if(username!="" && password!=""){
        alert("Login Successful");
    }

}

function page2(){
    var username1=document.forms["registerform"]["username1"].value;
    var email=document.forms["registerform"]["email"].value;
    var number=document.forms["registerform"]["number"].value;
    var password1=document.forms["registerform"]["password1"].value;
    var password2=document.forms["registerform"]["password2"].value;
    var address1=document.forms["registerform"]["address1"].value;

    if(username1==null || username1==""){
        document.getElementById("errorbox").innerHTML="Enter The Username!!"
        return false;
    }
    if(email==null || email==""){
        document.getElementById("errorbox").innerHTML="Enter The Email Id!!"
        return false;
    }
    if(number==null || number==""){
        document.getElementById("errorbox").innerHTML="Enter The Phonenumber!!"
        return false;
    }
    if(address1==null ||  address1=="" ){
        document.getElementById("errorbox").innerHTML="Enter The Address!!"
        return false;
    }
    if(password1==null || password1==""){
        document.getElementById("errorbox").innerHTML="Enter The Password!!"
        return false;
    }
    if(password1!== password2){
        document.getElementById("errorbox").innerHTML="The Password Don't Match!!"
        return false;
    }
    if(username1!="" && email!="" && number!="" && password1!="" && password2!=""){
        alert("Registration Successful");
    }

}
