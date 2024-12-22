let slideIndices = {
  gallery1: 0,
  gallery2: 0
};

function moveSlide(step, sliderId) {
  const slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  const slides = slider.querySelector('.slides');
  const totalSlides = slides.children.length;

  slideIndices[sliderId] += step;

  if (slideIndices[sliderId] >= totalSlides) {
    slideIndices[sliderId] = 0;
  } else if (slideIndices[sliderId] < 0) {
    slideIndices[sliderId] = totalSlides - 1;
  }

  const slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(-${slideIndices[sliderId] * slideWidth}px)`;
}

// แสดงรูปแรกเมื่อโหลดหน้าเว็บ
window.addEventListener('load', () => {
  moveSlide(0, 'gallery1');
  moveSlide(0, 'gallery2');
});