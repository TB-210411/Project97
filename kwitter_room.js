
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDqJOKzerV0dXuZcDvqxprUVIYYM9NgizA",
      authDomain: "let-s-chat-adffb.firebaseapp.com",
      databaseURL: "https://let-s-chat-adffb-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-adffb",
      storageBucket: "let-s-chat-adffb.appspot.com",
      messagingSenderId: "194505681214",
      appId: "1:194505681214:web:a1fdad77abd9a5d8c2246f"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="Welcome " + username+ "!";
    function add_room(){
          roomname=document.getElementById("roomname").value;
          firebase.database().ref("/").child(roomname).update({
                purpose: "Adding roomname"
          });
          localStorage.setItem("roomname",roomname);
          window.location="kwitter_page.html";
          
    }
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- " + Room_names);
row="<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
