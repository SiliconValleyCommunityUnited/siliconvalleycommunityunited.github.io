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
      var user = firebase.auth().currentUser;
    if(!user){
//      $('#paypal-button-container').replaceWith("<button type=\"button\" class=\"btn btn-primary btn-md\" onclick=\"window.location.href=\'Login.html\'\">Log In</button>");
      $('#paypal-button-container').replaceWith("<a href=\"Login.html\" class=\"button\">Sign In</a>");
    }
});
  });



function requestMembership(){
   firebase.auth().onAuthStateChanged(function(user){
    if(user){
          firebase.database().ref('memberReq/' + user.uid).set({
          name: user.displayName,
          email: user.email,
          });
        }
  });
}