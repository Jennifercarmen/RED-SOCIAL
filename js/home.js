$('.button-collapse').sideNav();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName);
    console.log(email);
    console.log(emailVerified);
    console.log(photoURL);
    console.log(isAnonymous);
    console.log(providerData);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
