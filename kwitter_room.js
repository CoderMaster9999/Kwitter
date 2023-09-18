// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCiIn0IVo-dI7JP4ZAjLujncSmQVEeuNVA",
      authDomain: "classtest-1c02c.firebaseapp.com",
      databaseURL: "https://classtest-1c02c-default-rtdb.firebaseio.com",
      projectId: "classtest-1c02c",
      storageBucket: "classtest-1c02c.appspot.com",
      messagingSenderId: "33724150749",
      appId: "1:33724150749:web:ae6c2b3a01c713d0867c34"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
      
      

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name-"+Room_names);
                  row = "<div class='Room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                   document.getElementById("output").innerHTML += row; }); });
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location="kwitter_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location="kwitter_room.html";
}


