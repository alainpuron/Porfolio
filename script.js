// if the form is empy the thank you alert does not show
function mailSent() {
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  if (email !== "" && message !== "") {
    alert("Your Email was sent to Alain Puron. Thank you!");
  }
}

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).ready(function(){
    $('.carousel').carousel();
});


