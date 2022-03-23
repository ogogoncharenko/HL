
// let headerInner = document.querySelector('.header__inner');
let headerBar = document.querySelector('.header__bar');
let headerBlocks = document.querySelector('.header__blocks');

window.addEventListener('scroll', headerScrollController);

function headerScrollController() {
    // console.log(window.scrollY)
    if (window.scrollY > 9) {
        // headerInner.classList.add('header_fixed-large');
        headerBar.classList.add('header__bar--visible');
        headerBlocks.classList.add('header__blocks--none');
    } else if (window.scrollY <= 9) {
        // headerInner.classList.remove('header_fixed-large');
        headerBar.classList.remove('header__bar--visible');
        headerBlocks.classList.remove('header__blocks--none');
    }
}