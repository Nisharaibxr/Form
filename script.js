function validate(){
    var fname = document.getElementById("name");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");

    if(fname.value.trim()==""|| lname.value.trim()=="" || email.value.trim()=="" ){
        alert("Enter details");
        return false;
    }
    else{
        return true;
    }

}