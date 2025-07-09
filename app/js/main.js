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

  const techTrack = document.querySelector('.technologies__company');
  const techPrev = document.querySelector('.technologies__button-slider--prev');
  const techNext = document.querySelector('.technologies__button-slider--next');
  const techSlides = document.querySelectorAll('.technologies__company-item');
  const techTotal = techSlides.length;
  let techIndex = 0;

  const reasonTrack = document.querySelector('.reason__slider');
  const reasonPrev = document.querySelector('.reason__button-slider--prev');
  const reasonNext = document.querySelector('.reason__button-slider--next');
  const reasonSlides = document.querySelectorAll('.reason__slider-item');
  const reasonTotal = reasonSlides.length;
  let reasonIndex = 0;

  window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      benefitTrack.style.transform = `translateX(0%)`;
      benefitIndex = 0;
    }
  })
    

  const update = () => {
    track.style.transform = `translateX(-${index * 33}%)`;
    prev.disabled = index === 0;
    next.disabled = index === total - 1;

  };

  const techUpdate = () => {
    techTrack.style.transform = `translateX(calc(-${techIndex * 25}% - (3px * ${techIndex})))`;
    techPrev.disabled = techIndex === 0;
    techNext.disabled = techIndex === techTotal - 1;
  };

  const benefitUpdate = () => {
    benefitTrack.style.transform = `translateX(calc(-${benefitIndex * 25}% - (3px * ${benefitIndex})))`;
    benefitPrev.disabled = benefitIndex === 0;
    benefitNext.disabled = benefitIndex === benefitTotal - 1;
  };

  const reasonUpdate = () => {
    reasonTrack.style.transform = `translateX(calc(-${reasonIndex * 25}% ))`;
    reasonPrev.disabled = reasonIndex === 0;
    reasonNext.disabled = reasonIndex === reasonTotal - 1;
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

  reasonPrev.addEventListener('click', () => {
    if (reasonIndex > 0) {
      reasonIndex--;
      reasonUpdate();
    }
  });

  reasonNext.addEventListener('click', () => {
    if (reasonIndex < reasonTotal - 1) {
      reasonIndex++;
      reasonUpdate();
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
      update();
    }
  });

  techPrev.addEventListener('click', () => {
    if (techIndex > 0) {
      techIndex--;
      console.log('click in tech test');
      techUpdate();
    }
  });

  techNext.addEventListener('click', () => {
    if (techIndex < techTotal - 1) {
      techIndex++;
      console.log('click in tech');
      techUpdate();
    }
  });

  update();

  /* labels */
  const fields = document.querySelectorAll('.contact__field');

    fields.forEach(field => {
      const input = field.querySelector('input, textarea');
      const label = field.querySelector('label');

      const toggleLabel = () => {
        if (input.value.trim() !== '' || document.activeElement === input) {
          label.style.opacity = '0';
        } else {
          label.style.opacity = '1';
        }
      };

      input.addEventListener('focus', toggleLabel);
      input.addEventListener('input', toggleLabel);
      input.addEventListener('blur', toggleLabel);

      // init state on load
      toggleLabel();
    });

    /* prevent page reloading */

    const sibmit = document.querySelector('.contact__submit');

    sibmit.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('click');
    })

});