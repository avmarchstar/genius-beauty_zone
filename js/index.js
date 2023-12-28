const btnShowModal = document.querySelector('.js-btn-showmodal');
const btnClose = document.querySelector('.js-btn-close');
const backdropModal = document.querySelector('.modal');

btnShowModal.addEventListener('click', showModal);
btnClose.addEventListener('click', showModal);

function showModal() {
    backdropModal.classList.toggle('hidden');
}