let headerInner = document.querySelector('.header__inner');
let headerLine = document.querySelector('.header__line');

window.addEventListener('scroll', headerSrcollController);

function headerSrcollController() {
    // console.log(window.scrollY)
    if (window.scrollY > 10) {
        headerInner.classList.add('header_fixed-large');
        headerLine.classList.add('header__line--visible');
    }
    else if (window.scrollY <= 9) {
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
        console.log(e.target.className);
        navToggle.classList.toggle('active');
        if(navWindow.style.display != 'block') {
        navWindow.style.display = 'block';
        } else if(navWindow.style.display = 'block')
        (navWindow.style.display = '');
    } else {}
}