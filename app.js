const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const sidebar = document.querySelector('.sidebar');

var slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});


function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex = (activeSlideIndex + 1) % slidesCount;
    }
    else if(direction === 'down') {
        --activeSlideIndex;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    console.log(activeSlideIndex);

    const height = container.clientHeight;
    const translateHeight = activeSlideIndex * height;

    mainSlide.style.transform = `translateY(-${translateHeight}px)`;
    sidebar.style.transform = `translateY(${translateHeight}px)`;
}