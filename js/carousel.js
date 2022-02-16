let btn = document.querySelector('.btn');
let dots = document.querySelector('.dots');
let dotItems = document.getElementsByClassName('dot');
let carouselImgs = document.getElementsByClassName('carousel__item');
let carouselIndex = 1;

btn.addEventListener('click', btnController);
dots.addEventListener('click', dotsController);

function btnController(e){
  if(e.target.dataset.btn === 'btn_prev') {
    carouselController(-1);
  }
  else if(e.target.dataset.btn === 'btn_next') {
    carouselController(1);
  }
  else
  console.log('btnController');
};

function dotsController(e){
  if (e.target.className !== 'dot') {return};
  showCarouselImgs(carouselIndex = e.target.dataset.dot)
}

function carouselController(n){
  if (n < 0){
    showCarouselImgs(carouselIndex -= 1);
  }
  else {
    showCarouselImgs(carouselIndex += 1);
  }
};

function showCarouselImgs(n){
  let i;

  if (n > carouselImgs.length) {carouselIndex = 1};
  if (n < 1) {carouselIndex = carouselImgs.length};

  for (i = 0; i < carouselImgs.length; i++) {
    carouselImgs[i].style.display = "none";
  }
  for (i = 0; i < dotItems.length; i++) {
    dotItems[i].className = dotItems[i].className.replace(" active", "");
  }

  carouselImgs[carouselIndex-1].style.display = "block";
  dotItems[carouselIndex-1].className += " active";
};