const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const cropLink = document.querySelector("#cropLink");
const diseaseLink = document.querySelector("#diseaseLink");
const cropFormSection = document.querySelector("#cropFormSection");
const plantDiseaseFormSection = document.querySelector("#plantDiseaseFormSection");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

cropLink.addEventListener("click", (e) => {
  e.preventDefault();
  cropFormSection.style.display = "block";
  plantDiseaseFormSection.style.display = "none";
});

diseaseLink.addEventListener("click", (e) => {
  e.preventDefault();
  cropFormSection.style.display = "none";
  plantDiseaseFormSection.style.display = "block";
});
