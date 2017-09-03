  
var config = {
  apiKey: "AIzaSyAEvvk4JUpBH5dTcWStG3riLy3Q7e4cgX8",
  authDomain: "test-2ab4f.firebaseapp.com",
  databaseURL: "https://test-2ab4f.firebaseio.com",
  projectId: "test-2ab4f",
  storageBucket: "test-2ab4f.appspot.com",
  messagingSenderId: "577570294935"
};
firebase.initializeApp(config);



$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      $("#log").replaceWith("<li><a>"+"Welcome " + firebase.auth().currentUser.displayName+"</a><li><li><a onclick=\"signOut()\">Sign Out</a><li>");
    }
    if(user.uid=='vLXshBeIN5SryIzWP62E5qsKCjD3'){
      
        var getEvents = firebase.database().ref('users/');
        getEvents.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot){
          firebase.database().ref('members/' + user.uid).set({
            firstName: childSnapshot.val().firstName,
            lastName: childSnapshot.val().lastName,
            userEmail: childSnapshot.val().userEmail,
            userType: childSnapshot.val().userType,
            membership: childSnapshot.val().membership
            
          });
        });
      });
    }
    
  });
});


