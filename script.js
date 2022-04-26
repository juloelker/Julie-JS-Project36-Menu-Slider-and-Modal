const toggle = document.getElementById('toggle'),
  closeModal = document.getElementById('close'),
  openModal = document.getElementById('open'),
  modal = document.getElementById('modal');

//toggle the navbar
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

//show the modal
openModal.addEventListener('click', () => modal.classList.add('show-modal'));

//hide the modal
closeModal.addEventListener('click', () =>
  modal.classList.remove('show-modal')
);

//hide modal with outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
