// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiIn0IVo-dI7JP4ZAjLujncSmQVEeuNVA",
    authDomain: "classtest-1c02c.firebaseapp.com",
    projectId: "classtest-1c02c",
    storageBucket: "classtest-1c02c.appspot.com",
    messagingSenderId: "33724150749",
    appId: "1:33724150749:web:ae6c2b3a01c713d0867c34"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function adduser()
 { user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
 }
//ADD YOUR FIREBASE LINKS
