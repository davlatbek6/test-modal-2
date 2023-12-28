const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function escapeBtn(event) {
  if ((event.key = "Escape")) {
    closeModal();
  }
}
document.addEventListener("keydown", escapeBtn);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
