window.onload = function(){
    
    var httpRequest = new XMLHttpRequest();
    var btn = document.getElementById("lookup");
    var chkbx = document.getElementById("check");
    var input = document.getElementById("country");
    
    btn.addEventListener("click", function(){
       httpRequest.onreadystatechange=function(){
           if (httpRequest.readyState===4 && httpRequest.status===200){
              document.getElementById("result").innerHTML=httpRequest.responseText;
           }else{
               console.log("Request denied. Please try again.");
           }
       };
       
       if(chkbx.checked){
           httpRequest.open("GET","world.php?all=true",true);
       }else{
           httpRequest.open("GET","world.php?country="+input.value,true);
       }
        httpRequest.send();
    });
};