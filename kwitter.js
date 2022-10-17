function add_user(){
    username=document.getElementById("username").value;
    if(username.length==0){
        document.getElementById("username").placeholder="User Name required";

    }
    else{
        localStorage.setItem("username", username);
        window.location="kwitter_room.html";
        

    }
}