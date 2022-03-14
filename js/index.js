let headerInner = document.querySelector('.header__inner');
let headerLine = document.querySelector('.header__line');

window.addEventListener('scroll', headerSrcollController);

function headerSrcollController() {
    // console.log(window.scrollY)
    if (window.scrollY > 10) {
        headerInner.classList.add('header_fixed-large');
        headerLine.classList.add('header__line--visible');
    } else if (window.scrollY <= 9) {
        headerInner.classList.remove('header_fixed-large');
        headerLine.classList.remove('header__line--visible');
    }
}

let windowSize = window.matchMedia('(max-width: 990px)');
let navToggle = document.querySelector('.nav__toggle')

window.addEventListener('resize', windowWidthWatcher);

function windowWidthWatcher() {
    if (windowSize.matches) {
        navToggle.style.display = "block";
    } else if (windowSize > 990 + 'px') {
        navToggle.style.display = "none";
    } else {}
}

windowWidthWatcher(windowSize);

let navWindow = document.querySelector('.navigation__active');

navToggle.addEventListener('click', navBtnController);

function navBtnController(e){
    if (e.target.className == 'nav__toggle' || e.target.className == 'toggle__item') {
        navToggle.classList.toggle('active');
        if(navWindow.style.display !== 'block') {
        navWindow.style.display = 'block';
        } else if(navWindow.style.display == 'block')
        (navWindow.style.display = '');
    } else {}
}

let ageVerificatorBtns = document.querySelector('.ageverificator__btns');
let ageVerificatorFailed = document.querySelector('.ageverificator__failed');
let wrapperAgeVerificator = document.querySelector('.wrapper__ageverificator');
let ageVerificatorText = document.querySelector('.ageverificator__text');
ageVerificatorBtns.addEventListener('click', ageVerificatorBtnsController);

function ageVerificatorBtnsController(e) {
    if (e.target.className == 'btn-no') {
        ageVerificatorFailed.innerHTML = 'К сожалению, доступ на сайт для вас закрыт';
        ageVerificatorBtns.remove();
        ageVerificatorText.remove();
    } else if (e.target.className == 'btn-yes') {
        localStorage.setItem('ageVerefication', true);
        wrapperAgeVerificator.style.display = 'none';
    } else {}
}

const cheackAge = () => {
    console.log(localStorage.getItem('ageVerefication'))
    if (localStorage.getItem('ageVerefication')) return;

    wrapperAgeVerificator.classList.add('wrapper__ageverificator--show');
}

cheackAge();

