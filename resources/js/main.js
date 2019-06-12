document.addEventListener("DOMContentLoaded", function(){

  //parallax landing elements
  let imageContainer = document.querySelector('.our-works__images'),
      images = document.querySelectorAll('.our-works__image');

  window.addEventListener('scroll', () => {
    let wScroll = window.pageYOffset;

    if(wScroll > imageContainer.offsetTop - window.innerHeight / 1.25){
      images.forEach((workImage,index) => {
        setTimeout(() => {
          workImage.classList.add('is-showing');
        }, 150 * (index+1));
      });
    }
  });

  //current year in the footer
  function currentYear(){
    let date =  new Date();
    let year = date.getFullYear();
    document.querySelector('.site-footer__year').innerHTML = year;
   
  }
  currentYear();

  //swiper init
  let mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
});


