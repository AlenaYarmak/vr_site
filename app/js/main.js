document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.hero__contacts');
  const prev = document.querySelector('.hero__arrow--prev');
  const next = document.querySelector('.hero__arrow--next');
  const slides = document.querySelectorAll('.hero__contact');
  const total = slides.length;
  let index = 0;

  const benefitTrack = document.querySelector('.benefits__slider');
  const benefitPrev = document.querySelector('.benefits__arrow--prev');
  const benefitNext = document.querySelector('.benefits__arrow--next');
  const benefitSlides = document.querySelectorAll('.benefits__slider-item');
  const benefitTotal = benefitSlides.length;
  let benefitIndex = 0;


  window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      benefitTrack.style.transform = `translateX(0%)`;
      benefitIndex = 0;
    }
    console.log(screenWidth);
  })
    

  const update = () => {
    track.style.transform = `translateX(-${index * 33}%)`;
    prev.disabled = index === 0;
    next.disabled = index === total - 1;

  };

  const benefitUpdate = () => {
    benefitTrack.style.transform = `translateX(calc(-${benefitIndex * 25}% - (3px * ${benefitIndex})))`;
    benefitPrev.disabled = benefitIndex === 0;
    benefitNext.disabled = benefitIndex === benefitTotal - 1;

  };

  benefitPrev.addEventListener('click', () => {
    if (benefitIndex > 0) {
      benefitIndex--;
      benefitUpdate();
    }
  });

  benefitNext.addEventListener('click', () => {
    if (benefitIndex < benefitTotal - 1) {
      benefitIndex++;
      benefitUpdate();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  next.addEventListener('click', () => {
    if (index < total - 1) {
      index++;
      console.log('click');
      update();
    }
  });

  update();
})