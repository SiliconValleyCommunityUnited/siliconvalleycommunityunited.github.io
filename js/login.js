  
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
  });
});




//firebase.auth().onAuthStateChanged(function(user){
//    if(user){
//      alert(firebase.auth().currentUser.displayName);
//      $("#log").replaceWith("<a>"+"Welcome! " + firebase.auth().currentUser.displayName+"</a>");
//    }
//});






//var user = firebase.auth().currentUser;
//firebase.auth().onAuthStateChanged(function(user){
//  if(user){
//    $("#asdf").text(user)
//  }else{
//    $("#asdf").text(user)
//  }
//})


//$(".logg").click(function(){
//  $("about").text("meme machine")
//}
//var user = firebase.auth().currentUser;
//    if(user){
//        $("about").text(user);
//        alert("asdfsdf");
//}  

//   if(jQuery){
//      alert("checked")
//    }
//    
//    function checkLogin{
//      alert("checked")
//      var user = firebase.auth().currentUser;
//      if(user){
//        $("ul li:last").text(user);
//        alert("asdfsdf");
//      }  
//    }
//    $(".logg").click(function(){
//      