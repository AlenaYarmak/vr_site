document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.hero__contacts');
    const prev = document.querySelector('.hero__arrow--prev');
    const next = document.querySelector('.hero__arrow--next');
    const slides = document.querySelectorAll('.hero__contact');
    const total = slides.length;
    let index = 0;

    const update = () => {
    track.style.transform = `translateX(-${index * 33}%)`;
    prev.disabled = index === 0;
    next.disabled = index === total - 1;
  };

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