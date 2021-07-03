(() => {
  window.addEventListener('DOMContentLoaded', (event) => {
    const wrenchButtons = document.querySelectorAll('.tools');
    
    function wrenchModal() {
      Swal.fire({
        title: `${this.children[1].innerText}`,
        
        confirmButtonColor: '#9fc1c2',
        confirmButtonText: 'close'
      })
    }

    for (wrenchButton of wrenchButtons) {
      wrenchButton.addEventListener('click', wrenchModal)
    }

    document.getElementById("year").innerHTML = new Date().getFullYear();

  });
})();