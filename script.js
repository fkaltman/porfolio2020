(() => {
  window.addEventListener("DOMContentLoaded", (event) => {
    const modals = document.querySelectorAll(".modal");

    function displayModal() {
      let span = this.querySelector('.modal-text')
      let img = this.querySelector('img')
      span === null ? span = '' : span = `${span.innerText}`;
      img === null ? img = '' : img = `${img.src}`;
      Swal.fire({
        title: span,
        imageUrl: img,
      });
    }

    for (modal of modals) {
      modal.addEventListener("click", displayModal);
    }

    document.getElementById("year").innerHTML = new Date().getFullYear();
  });
})();
