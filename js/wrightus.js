var link = document.querySelector(".button-wrightus");
var popup = document.querySelector(".wright-us-modal");
var close = popup.querySelector(".modal-close");
var yourName = popup.querySelector(".wright-name");

var email = popup.querySelector(".wright-email");
var letterText = popup.querySelector(".wright-letter");
var isStorageSupport = true;
var storage = "";

try {
 storage = localStorage.getItem("yourName");
 storage = localStorage.getItem("email");
} catch (err) {
 isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("modal-show");
 if (storage) {
  yourName.value = storage;
  email.value = storage;
  letterText.focus();
 } else {
  yourName.focus();
 }
});

close.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
 popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!yourName.value || !email.value) {
   evt.preventDefault();
   popup.classList.remove("modal-error");
   popup.offsetWidth = popup.offsetWidth;
   popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
     localStorage.setItem("yourName", yourName.value);
     localStorage.setItem("email", email.value);
    }
 }
});

window.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
   evt.preventDefault();
   if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
   }
 }
});
