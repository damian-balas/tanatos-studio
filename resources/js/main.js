document.addEventListener("DOMContentLoaded", function(){
  
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

var swiper = new Swiper('.testamonials .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let mySwiper2 = new Swiper('.team__swiper .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView:3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});