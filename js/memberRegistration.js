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
      $("#log").replaceWith("<li class=\"menu-has-children\"><a href=\"#\" class=\"sf-with-ul\">"+"Welcome " + firebase.auth().currentUser.displayName+"</a><ul><li><a href=\"accountSettings.html\">Account Settings</a></li></ul></li><li><a onclick=\"signOut()\">Sign Out</a></li>");
    }
  });
});

$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user){
    if(user){
          var event = firebase.database().ref('freeEvents/'+user.uid);
      event.on('value',function(snapshot){
        $("#free").replaceWith("<li>You have "+snapshot.val().freeEvents+" free events left</li>");
      });
    }
  });
})

function requestEvent(){
  var user = firebase.auth().currentUser; 
  if(user){
    var event = firebase.database().ref('users/'+user.uid);
      event.on('value',function(snapshot){
        firebase.database().ref('events/adult/healthFieldLecture/' + firebase.auth().currentUser.uid).set({
          name: snapshot.val().firstName + " "+ snapshot.val().lastName,
          email: snapshot.val().userEmail,
          type: snapshot.val().userType
        });
        alert("Registered!");
    });
  }else{
    alert("Not logged in");
  }
}
var check = true;
function requestFreeEvent(){
  var user = firebase.auth().currentUser; 
  if(user){
    var event = firebase.database().ref('users/'+user.uid);
      event.on('value',function(snapshot){
        if(snapshot.val().freeEvents != 0){
          firebase.database().ref('events/adult/blah/' + user.uid).set({
          name: snapshot.val().firstName + " "+ snapshot.val().lastName,
          email: snapshot.val().userEmail,
          type: snapshot.val().userType
          });
          
          
//          alert(snapshot.val().freeEvents);
          alert("Registered!");
          
//          check = false;
        }else{
          alert("No more free events");
        }
    });
    var event = firebase.database().ref('freeEvents/'+user.uid);
    
      event.on('value',function(snapshot){
        var temp = parseInt(snapshot.val().freeEvents);
        if(temp !=temp-1){
          firebase.database().ref('freeEvents/' + user.uid).update({
              freeEvents:  temp-1 
          });
        }
        
        
          
      });
    
    
  }else{
    alert("Not logged in");
  }

}