
function validatePassword() {
  const pwsd = document.querySelector("#password").value;
  const confirmPwsd = document.querySelector("#confirmPwsd").value;
  const errorMsg = document.querySelector(".errorMsg");
  const submitBtn = document.querySelector(".submitBtn")


  if (pwsd === '' || confirmPwsd === '') return;

  if (pwsd !== confirmPwsd) {
    errorMsg.textContent = "Password doesn't match!!"
    confirmPwsdInput.classList.add("misMatch");
    submitBtn.disabled = true;
  }
  else {
    errorMsg.textContent = '';
    confirmPwsdInput.classList.remove("misMatch");
    submitBtn.disabled = false;
  }
}


const passwordInput = document.querySelector("#password")
passwordInput.addEventListener("keyup", validatePassword)

const confirmPwsdInput = document.querySelector("#confirmPwsd")
confirmPwsdInput.addEventListener("keyup", validatePassword);
