let accordions = document.getElementsByClassName('accordion__wrapper');
let accordionsButtons = document.getElementsByClassName('line__button');

let accordionAllArr = Array.from(accordions);
let btnAllArr = Array.from(accordionsButtons);

btnAllArr.forEach((btnItem, btnIndex) => {
    console.log(btnItem, btnIndex)
    btnItem.addEventListener('click', () => {
        btnItem.firstElementChild.classList.toggle('arrow--down');
        accordionAllArr.forEach((accItem, accIndex) => {
            console.log(accItem, accIndex)
            if (btnIndex === accIndex) {
                accItem.classList.toggle('accordion__wrapper--non-active');
            } 
        })
    })
});
