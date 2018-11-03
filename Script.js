
    function getInfo(){
        var username= document.getElementById("username");
        var password= document.getElementById("pass");
        
        var coruser="test"
        var corpass="12345"
        
        if(username.value ==coruser){
            if(username.value ==coruser){
                
                window.alert("You are logged in as "+username.value);
            }else{
                window.alert("Incorrect Username and Password");
            }
        }else{
            window.alert("Incorrect Username and Password");
        }
        
    }