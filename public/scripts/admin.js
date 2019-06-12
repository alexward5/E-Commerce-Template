// Handle Account Status w/ Listener
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    // After successful login, user will be redirected to admin page
    if (window.location.pathname === `/admin/login`) {
      window.location.pathname = `/admin/${user.email}`;
    }
  } else {
    if (window.location.pathname !== '/admin/login') {
      // user not signed in
      window.location.pathname = '/admin/login';
    }
  }
});

const loginButton = document.querySelector('#login-button');
if (loginButton) {
  loginButton.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(document.querySelector('#email').value, document.querySelector('#password').value).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (error) {
        console.log(errorCode);
        console.log(errorMessage);
      } else {
        console.log('successful login');
      }
    });
  });
}

const logoutButton = document.querySelector('#logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signed out');
      window.location = '/admin/login';
    }).catch(function(error) {
      console.log(error);
    });
  });
}
