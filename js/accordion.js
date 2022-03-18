let accordions = document.getElementsByClassName('accordion__wrapper');
let accordionsButtons = document.getElementsByClassName('line__button');
let lineContainers = document.getElementsByClassName('line__container');

let lineContainerAll = Array.from(lineContainers);
let accordionAllArr = Array.from(accordions);
let btnAllArr = Array.from(accordionsButtons);

lineContainerAll.forEach((lineItem, lineIndex) => {
    lineItem.addEventListener('click', () => {
        btnAllArr.forEach((btnItem, btnIndex) => {
            if(lineIndex == btnIndex + 1) {
                btnItem.firstElementChild.classList.toggle('arrow--down');
                btnItem.classList.toggle('line__button_active');
                accordionAllArr.forEach((accItem, accIndex) => {
                    if (btnIndex === accIndex) {
                        accItem.classList.toggle('accordion__wrapper--non-active');
                    } else {}
                })
            } else{}
        })
    })
})
