
//parallax landing elements
const imageContainer = document.querySelector('.our-works__images');
const images = document.querySelectorAll('.our-works__image');

window.addEventListener('scroll', () => {
  const wScroll = window.pageYOffset;

  if(wScroll > imageContainer.offsetTop - window.innerHeight / 1.25){
    images.forEach((workImage,index) => {
      setTimeout(() => {
        workImage.classList.add('is-showing');
      }, 150 * (index+1));
    });
  }
});

//current year in the footer
function updateCurrentYear(){
  const date =  new Date();
  const year = date.getFullYear();
  document.querySelector('.site-footer__year').innerHTML = year;
}
updateCurrentYear();

//closing navigation

const navItems = document.querySelectorAll('.site-nav__a');
const checkbox = document.querySelector('#site-nav-toggle');

navItems.forEach((i) => {
  i.addEventListener('click', ()=>{
    checkbox.checked = false;
  });
});




//swiper init
let mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});



