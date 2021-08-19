const email = document.getElementById("email");
const message = document.querySelector(".message");
const form = document.getElementById("form1");
const error = document.querySelector(".error-icon");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailVal = email.value;
  if (!validateEmail(emailVal)) {
    message.classList.add("error");
    error.classList.add("error");
  } else {
    message.classList.remove("error");
    error.classList.remove("error");
  }
});
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
