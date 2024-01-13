// shows modal
{
    const modalBtnShow = document.querySelector('.js-btn-showmodal');
    const modalBtnClose = document.querySelector('.js-btn-close');
    const backdropModal = document.querySelector('.modal');

    modalBtnShow.addEventListener('click', showModal);
    modalBtnClose.addEventListener('click', showModal);

    function showModal() {
        backdropModal.classList.toggle('hidden');
    }
}

// burger menu
{ 
    const burgerMenuBtnShow = document.querySelector('.js-btn-burger-menu');
    const burgerMenuBtnClose = document.querySelector('.burger-menu');
    const burgerMenuModal = document.querySelector('.burger-menu');
   
    burgerMenuBtnShow.addEventListener('click', showBurgerMenu);
    burgerMenuBtnClose.addEventListener('click', showBurgerMenu);
    burgerMenuModal.addEventListener('click', e=>e);
    
    function showBurgerMenu() {
            burgerMenuModal.classList.toggle('hidden');
    }
}

// simple slider without swipe effect
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
