// shows modal
{
    const btnShowModal = document.querySelector('.js-btn-showmodal');
    const btnClose = document.querySelector('.js-btn-close');
    const backdropModal = document.querySelector('.modal');

    btnShowModal.addEventListener('click', showModal);
    btnClose.addEventListener('click', showModal);

    function showModal() {
        backdropModal.classList.toggle('hidden');
    }
}

// slider
{
    const $sliderBtnPrev = document.querySelector('.prev');
    const $sliderBtnNext = document.querySelector('.next');
    const $sliderContainer = document.querySelector('.procedures-section__cards');
    let sliderCards = Array.from(document.querySelectorAll('.procedures-card'));

    $sliderBtnPrev.addEventListener('click', () => sliderMove('prev'))
    $sliderBtnNext.addEventListener('click', () => sliderMove('next'))


    function sliderMove(direction) {
        let shiftingCard;
        if (direction === 'prev') {
            shiftingCard = sliderCards.pop();
            sliderCards.unshift(shiftingCard)
        } else {
            shiftingCard = sliderCards.shift();
            sliderCards.push(shiftingCard)
        }
        $sliderContainer.innerHTML = '';
        sliderCards.forEach(card => { $sliderContainer.insertAdjacentElement("beforeend", card) });

    }
}
