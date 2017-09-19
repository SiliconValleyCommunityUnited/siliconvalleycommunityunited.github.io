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

function requestEvent(){
  var user = firebase.auth().currentUser; 
  if(user){
    var event = firebase.database().ref('users/'+user.uid);
      event.on('value',function(snapshot){
        firebase.database().ref('events/adult/healthFieldLecture/nonmember/' + firebase.auth().currentUser.uid).set({
          name: snapshot.val().firstName + " "+ snapshot.val().lastName,
          email: snapshot.val().userEmail,
          type: snapshot.val().userType
        });
    });
  }else{
    alert("Not logged in");
  }
}