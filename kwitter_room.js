
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB7XP0Manzk7qtzSZJIp4-SUtSpdQ9gUkk",
      authDomain: "c-100-6e39b.firebaseapp.com",
      databaseURL: "https://c-100-6e39b-default-rtdb.firebaseio.com",
      projectId: "c-100-6e39b",
      storageBucket: "c-100-6e39b.appspot.com",
      messagingSenderId: "292408666132",
      appId: "1:292408666132:web:49eed8c3aaf16e9b2a9f01"
    };
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+user_name+" !"

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name = "+Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div></hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.localStorage = "kwitter_page.html";
}
