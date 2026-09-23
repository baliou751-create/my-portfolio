        // pour le menu du nav

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});


menu.querySelectorAll("a").forEach((lien) => {
  lien.addEventListener("click", () => {
    menu.classList.add("hidden");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

        // pour la partie formulaire

const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  if (nom.value === "") {
    formMessage.textContent = "Veuillez renseigner votre nom !";
  } else if (email.value === "") {
    formMessage.textContent = "Veuillez renseigner votre email !";
  } else if (message.value === "") {
    formMessage.textContent = "Veuillez renseigner votre message !";
  } else {
    formMessage.textContent = "Formulaire correctement rempli !";
  }


});