const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userDetails = { email: email.value, password: password.value };

  console.log(userDetails);
  event.currentTarget.reset();
}
