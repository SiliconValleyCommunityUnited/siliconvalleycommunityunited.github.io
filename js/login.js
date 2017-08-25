  $(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
//        $("#asdf").text(firebase.auth().currentUser.displayName);
        alert(firebase.auth().currentUser.displayName)
      }
      
    });
    alert("here");
  });




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