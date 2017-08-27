  
$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      alert(firebase.auth().currentUser.displayName);
      $("#log").replaceWith("<a>"+"Welcome! " + firebase.auth().currentUser.displayName+"</a>");
    }
  });
  alert("here");
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