  
var config = {
  apiKey: "AIzaSyAEvvk4JUpBH5dTcWStG3riLy3Q7e4cgX8",
  authDomain: "test-2ab4f.firebaseapp.com",
  databaseURL: "https://test-2ab4f.firebaseio.com",
  projectId: "test-2ab4f",
  storageBucket: "test-2ab4f.appspot.com",
  messagingSenderId: "577570294935"
};
firebase.initializeApp(config);

function updateMember(){
    var user = firebase.auth().currentUser;
  var id1 = document.getElementById('enterUserID').value;
    if(user.uid=='vLXshBeIN5SryIzWP62E5qsKCjD3'){
      firebase.database().ref('users/' +id1).update({
        membership: 1
      });
    }
}


$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user){
    
    if(user){
      $("#log").replaceWith("<li><a>"+"Welcome " + firebase.auth().currentUser.displayName+"</a><li><li><a onclick=\"signOut()\">Sign Out</a><li>");
    }
  });
});


