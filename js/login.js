function checkCredentials() {
  var companyId = document.getElementById("companyId").value;
  var password = document.getElementById("password").value;

  // Check if login credentials are correct (dummy example)
  if (companyId === "example" && password === "password") {
    document.getElementById("companyId").style.borderColor = "green";
    document.getElementById("password").style.borderColor = "green";
  } else {
    document.getElementById("companyId").style.borderColor = "red";
    document.getElementById("password").style.borderColor = "red";
  }
}

function login() {
  var companyId = document.getElementById("companyId").value;
  var password = document.getElementById("password").value;

 // Check if login credentials are correct (dummy example)
 if (companyId === "example" && password === "password") {
  document.getElementById("companyId").style.borderColor = "green";
  document.getElementById("password").style.borderColor = "green";
 
  // Redirect to the desired page
  window.location.href = "main.html";
} else {
  displayErrorMessage("Invalid login credentials. Please try again.");
  document.getElementById("companyId").style.borderColor = "red";
  document.getElementById("password").style.borderColor = "red";
}

}