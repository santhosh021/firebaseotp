var firebaseConfig = {
	    apiKey: "AIzaSyBUmyjK3X1SqHBfvdLgAxRha7P97yw4fxM",
		  authDomain: "react-http-post-da0c7.firebaseapp.com",
		  databaseURL: "https://react-http-post-da0c7-default-rtdb.firebaseio.com",
		  projectId: "react-http-post-da0c7",
		  storageBucket: "react-http-post-da0c7.appspot.com",
		  messagingSenderId: "151449655403",
		  appId: "1:151449655403:web:aafacd7d7de8892d8c792e"
};

	  firebase.initializeApp(firebaseConfig);

window.onload=function() {
	render();
}

function render() {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
		  'size': 'invisible',
		  'callback': (response) => {
		    // reCAPTCHA solved, allow signInWithPhoneNumber.
		    onSignInSubmit();
		  }
		});
		recaptchaVerifier.render();
}

function phoneAuth() {
	var data = {
		number: $('#number').val()
	};

	firebase.auth().signInWithPhoneNumber("+91"+data.number, window.recaptchaVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("Message Sent!");
    }).catch((error) => {
      alert(error.message);
    });
}

function codeverify() {
	var coder = {
		code: $('#verificationcode').val()
	};

	confirmationResult.confirm(coder.code).then((result) => {
	  // User signed in successfully.
	  alert("Successfully Registered!")
	  const user = result.user;
	}).catch((error) => {
	  alert(error.message);
	});
}