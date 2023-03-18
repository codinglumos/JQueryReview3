//1. Add a .click() event handler to the submit button using its id "submitButton" so that when the button is clicked, log to the console "Submit button was clicked"

//2. In the event handler function, get the values the user enters in the email and password fields in the form so that when the submit button is clicked, log to console, the values from the input fields in the form.

  $('#submitButton').click(function() {
    var email = $('#emailField').val();
    var password = $('#passwordField').val();
    console.log('Email:', email);
    console.log('Password:', password);
  });

/*The code adds a click event listener to the submit button with id "submitButton". When the button is clicked, the function logs to the console the values of the email and password input fields in the login form.

The first line selects the submit button element using its id and attaches the click event listener to it using the .click() method. The second line defines the function that is called when the button is clicked.

Within the function, the .val() method is used to get the values of the email and password input fields. These values are then logged to the console using console.log().*/