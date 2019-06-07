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
});