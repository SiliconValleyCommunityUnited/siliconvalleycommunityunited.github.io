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
  var user = firebase.auth().currentUser;
    if(user==null){
      $('#paypal-button-container').replaceWith("<button type=\"button\" class=\"btn btn-primary btn-md\" href=\"Login.html\">Log In</button>");
    }
});
