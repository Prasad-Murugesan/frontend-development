function thankyou(){
        var cardnumber=document.forms["creditcard"]["cardnumber"].value;
        var accholdername=document.forms["creditcard"]["accholdername"].value;
        var cvv=document.forms["creditcard"]["cvv"].value;
        var expdate=document.forms["creditcard"]["expdate"].value;
    
        if(cardnumber==null || cardnumber==""){
            document.getElementById("errorbox").innerHTML="Enter Card Number!!"
            return false;
        }
        if(accholdername==null || accholdername==""){
            document.getElementById("errorbox").innerHTML="Enter Account Holder Name!!"
            return false;
        }
        if(cvv==null || cvv==""){
            document.getElementById("errorbox").innerHTML="Enter CVV!!"
            return false;
        }
        if(expdate==null || expdate==""){
            document.getElementById("errorbox").innerHTML="Select Card Expiry Date!!"
            return false;
        }
        if(cardnumber!="" && accholdername!="" &&  cvv!="" && expdate!=""){
            alert("Payment Successful");
        }
    
}
