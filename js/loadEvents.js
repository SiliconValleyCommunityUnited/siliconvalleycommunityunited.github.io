  
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
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var c = new Date(year + 1, month, day)
  
//  Date.prototype.yyyymmdd = function() {
//  var mm = this.getMonth() + 1; // getMonth() is zero-based
//  var dd = this.getDate();
//
//  return [this.getFullYear(),
//          (mm>9 ? '' : '0') + mm,
//          (dd>9 ? '' : '0') + dd
//         ].join('');
//};
//
//var date = new Date();
//date.yyyymmdd();
  var user = firebase.auth().currentUser;
  var id1 = document.getElementById('enterUserID').value;
    if(user.uid=='vLXshBeIN5SryIzWP62E5qsKCjD3'){
      firebase.database().ref('users/' +id1).update({
        membership: 1,
        endDate: c.toDateString(),
        freeEvents: 3
      });
      alert("Updated!");
    }
}

function removeMember(){
    var user = firebase.auth().currentUser;
  var id1 = document.getElementById('removeUserID').value;
    if(user.uid=='vLXshBeIN5SryIzWP62E5qsKCjD3'){
      firebase.database().ref('users/' +id1).update({
        membership: 0,
        endDate: null
      });
      alert("Updated!");
    }
}


$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
        $("#log").replaceWith("<li class=\"menu-has-children\"><a href=\"#\" class=\"sf-with-ul\">"+"Welcome " + firebase.auth().currentUser.displayName+"</a><ul><li><a href=\"html/accountSettings.html\">Account Settings</a></li></ul></li><li><a onclick=\"signOut()\">Sign Out</a></li>");
    }
  });
});


