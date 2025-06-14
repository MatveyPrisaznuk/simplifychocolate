(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modaltwo-open]"),
    closeModalBtn: document.querySelector("[data-modaltwo-close]"),
    modal: document.querySelector("[data-modaltwo]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hiddenmodaltwo");
    document.body.classList.toggle("no-scroll");
  }
})();