const openModalButton = document.querySelector("#open-modal-orcamento");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

function exibirAlerta() {
  alert("Formulário eviado com Sucesso! \n Em breve entraremos em contato.");
} 