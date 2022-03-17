let headerInner = document.querySelector('.header__inner');
let headerLine = document.querySelector('.header__line');

window.addEventListener('scroll', headerScrollController);

function headerScrollController() {
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

let ageVerificationBtns = document.querySelector('.ageverification__btns');
let ageVerificationFailed = document.querySelector('.ageverification__failed');
let wrapperAgeVerification = document.querySelector('.wrapper__ageverification');
let ageVerificationText = document.querySelector('.ageverification__text');
ageVerificationBtns.addEventListener('click', ageVerificationBtnsController);

function ageVerificationBtnsController(e) {
    if (e.target.className == 'btn-no') {
        ageVerificationFailed.innerHTML = 'К сожалению, доступ на сайт для вас закрыт';
        ageVerificationBtns.remove();
        ageVerificationText.remove();       
    } else if (e.target.className == 'btn-yes') {
        localStorage.setItem('ageVerification', true);
        wrapperAgeVerification.style.display = 'none';
    } else {}
}

const checkAge = () => {
    console.log(localStorage.getItem('ageVerification'))
    if (localStorage.getItem('ageVerification')) return;

    wrapperAgeVerification.classList.add('wrapper__ageverification--show');
}

checkAge();

