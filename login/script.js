function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    

    if ((user=="") || (pass=="")){
        alert("Please fill the credentials");
    }
    else if(user=="admin"){
        if(pass=="Ignite@123"){
            alert("Login successfull");
        }
        else{
            alert("Password is incorrect");
        }
    }
    else{
        alert("User not found");
    }

};


function register(){
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var number = document.getElementById("contactnumber").value;


    if ((password=="")||(name=="")||(email=="")||(number=="")||(dob=="")){
        alert("Fill all the fields");
    }

    if (!(password.length >= 8)){
        alert("Password should contain morethan 8 characters");
    }
};

