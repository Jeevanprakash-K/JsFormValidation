function validateForm() {
  var fname = document.getElementById("firstname").value.trim();
  var lname = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var contact = document.getElementById("contact").value.trim();
  var address = document.getElementById("address").value.trim();
  var city = document.getElementById("city").value.trim();
  var flag = true;

  if (fname === "") {
    alert("First Name must be filled out");
    flag = false;
  }

  if (lname === "") {
    alert("Last Name must be filled out");
    flag = false;
  }

  if (email === "") {
    alert("Email must be filled out");
    flag = false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    flag = false;
  }

  if (contact === "") {
    alert("Contact must be filled out");
    flag = false;
  }

  var contactPattern = /^\d{10}$/;
  if (!contactPattern.test(contact)) {
    alert("Contact must be a 10-digit number");
    flag = false;
  }

  if (address === "") {
    alert("Address must be filled out");
    flag = false;
  }

  if (city === "") {
    alert("City must be filled out");
    flag = false;
  }

  if (flag == true) {
    alert("Registration Complete");
  }
}
