// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqIvSVJoknpvLJHG6Qn0om0JDfGVgJqdE",
    authDomain: "webapp-faf2d.firebaseapp.com",
    databaseURL: "https://webapp-faf2d.firebaseio.com",
    projectId: "webapp-faf2d",
    storageBucket: "webapp-faf2d.appspot.com",
    messagingSenderId: "294281955476"
  };
  firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  var fbprovider = new firebase.auth.FacebookAuthProvider();
  var user;
  var user1;

  function signin(){
    if(user){
      app(user);
    }
    else{
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  user = result.user;
  console.log(user.displayName);
  sucess(user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  }
}
function fb(){
  if(user1){
      app(user1);
    }else{
  firebase.auth().signInWithPopup(fbprovider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  console.log("token:" + token);
  // The signed-in user info.
  alert("hi");
  user1 = result.user1;
  console.log(user1.displayName);
  sucess(user1);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  console.log("inside error");
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
}

function app(user){
  alert("Succesfully logged in as" + user.displayName);
}
function sucess(user){
  document.getElementById("text").innerHTML=user.displayName;
  document.getElementById("text1").innerHTML="log in success";
  document.getElementById("logout").style.display = "block";

}
function logout(){
firebase.auth().signOut().then(function() {
 alert("logged out successfuly");
 document.getElementById("logout").style.display = "none";
 document.getElementById("text1").style.display = "none";
 document.getElementById("text").style.display = "none";
}).catch(function(error) {
  alert("Error logging out");
});
}