let accordions = document.getElementsByClassName('accordion__wrapper');
let accordionsButtons = document.getElementsByClassName('line__button');

let accordionAllArr = Array.from(accordions);
let BtnAllArr = Array.from(accordionsButtons);

BtnAllArr.forEach((btnItem, btnIndex) => {
    btnItem.addEventListener('click', () => {
        btnItem.firstElementChild.classList.toggle('arrow--down');
        accordionAllArr.forEach((accItem, accIndex) => {
            if (btnIndex === accIndex) {
                accItem.classList.toggle('accordion__wrapper--non-active');
            } 
        })
    })
});
