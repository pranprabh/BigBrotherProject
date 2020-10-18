document.getElementById("loginButton").addEventListener("click", function() {
    login()
   });
   
   document.getElementById("signupButton").addEventListener("click", function() {
    createuser()
   });
   
   
   
   function createuser() {
    const email = document.getElementById("emailText").value
    const pw = document.getElementById("pwText").value
   
    firebase.auth().createUserWithEmailAndPassword(email, pw).then(function(user) {
        location.href = "mlside/indexmap.html"
    }).catch(function(error) {
       console.log("sign up failed")
    });
   }
   
   function login() {
    const email = document.getElementById("emailText").value
    const pw = document.getElementById("pwText").value
   
    firebase.auth().signInWithEmailAndPassword(email, pw).then(function(user) {
        location.href = "mlside/indexmap.html"
    }).catch(function(error) {
     console.log("log in failed")
    });
   }