let headerInner = document.querySelector('.header__inner');
let headerLine = document.querySelector('.header__line');
// let headerSticky = header.scrollTop;

window.addEventListener('scroll', headerSrcollController)




function headerSrcollController() {
    console.log(window.scrollY)

    if (window.scrollY > 10) {
        headerInner.classList.add('header_fixed-large');
        headerLine.classList.add('header__line--visible');
    }
    else if (window.scrollY <= 9) {
        console.log(window.scrollY == 0 + 'px');
        console.log(window.scrollY)
        headerInner.classList.remove('header_fixed-large');
        headerLine.classList.remove('header__line--visible');
    }

}

// window.onscroll = function() {scrollInspector()};

// function scrollInspector() {
//     if (window.scrollY > sticky) {
//         headerInner.classList.add("header_fixed-large");
//         headerLine.classList.add("header_line");
//     } else {
//         headerInner.classList.remove("header_fixed-large");
//         headerLine.classList.remove("header_line");
//     }
// }
