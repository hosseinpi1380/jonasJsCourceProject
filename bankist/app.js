
const $ = document;
const moldal = $.querySelector(".modal");
const overlay = $.querySelector(".overlay");
const btnCloseModal = $.querySelector(".btn--close-moldal");
const btnsOpenModal = $.querySelectorAll(".btn--show-modal");
const allSections = $.querySelectorAll(".section");
const section1 = $.getElementById("section--1");
const headerEl = $.querySelector(".header");
const btnScrolTo = $.querySelector(".btn--scrol-to");
const h1El = $.querySelector("h1");
const tabContainer = $.querySelector(".operations__tab-container");
const tab = $.querySelectorAll(".operations__tab");
const tabContent = $.querySelectorAll(".operations__content");
const navEl = $.querySelector(".nav");
const slider = $.querySelector('.slider');
const dotCotainer = $.querySelector('.dots');
const openModal = function (e) {
  e.preventDefault();
  moldal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function (e) {
  e.preventDefault();
  moldal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
overlay.addEventListener("click", closeModal);
//page naviagtion();
$.querySelectorAll("a").forEach((el) =>
  // console.log(el))
  el.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

btnScrolTo.addEventListener("click", () => {
  section1.scrollIntoView(true);
});
const randomColor = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

tabContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  //gurd clause//
  if (!clicked) return;
  //active tab//
  tab.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  //activate content area;
  tabContent.forEach((tc) =>
    tc.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.getAttribute("data-tab")}`)
    .classList.add("operations__content--active");
});
navEl.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const parent = e.target.closest(".nav");
    parent.querySelector(".img").classList.add("opacity");
    const link = e.target;
    const siblings = link.closest(".nav__menu").querySelectorAll(".nav__link");
    siblings.forEach((el) => el.classList.add("opacity"));
    link.classList.remove("opacity");
    const ulEle = $.querySelector(".nav__menu").querySelectorAll(".nav__link");
    ulEle.forEach((el) => (el.style.transition = "all .4s ease"));
  } else {
    const imgSibling = e.target.nextElementSibling;
    imgSibling.querySelectorAll(".nav__link").forEach((element) => {
      element.classList.add("opacity");
    });
  }
});
navEl.addEventListener("mouseout", (e) => {
  e.target.closest(".nav").querySelector(".img").classList.remove("opacity");
  $.querySelectorAll(".nav__link").forEach((el) =>
    el.classList.remove("opacity")
  );
});
//sticky navgiation

// const initalCoords=section1.getBoundingClientRect()
// window.addEventListener('scroll',function(){
//   if(this.window.scrollY>initalCoords.top){
//     navEl.classList.add('sticky');
//     console.log('اعمال');
//   }else{
//     navEl.classList.remove('sticky');
//     console.log('بتشکشب');
//   }
// });
const headerObserve = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) navEl.classList.add("sticky");
    else {
      navEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
headerObserve.observe(headerEl);

//reveal sections
// const sectionObserve = new IntersectionObserver(
//   (entries) => {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;

//     entry.target.classList.remove("section__hidden");
//     sectionObserve.unobserve(entry.target);
//   },
//   {
//     root: null,
//     threshold: 0.1,
//   }
// );
// allSections.forEach(function (section) {
//   sectionObserve.observe(section);
//   section.classList.add("section__hidden");
// });
//lazy loading images
// const imgTarget=$.querySelectorAll('img[data-src]');
// const loadImg=function(entries,observer){
//   const [entry]=entries;
//   if(!entry.isIntersecting)return;

//   entry.target.setAttribute('src',entry.target.dataset.src)
//   entry.target.classList.remove('blur')
// }
// const imgObserver=new IntersectionObserver(loadImg,{
//   root:null,threshold:1
// });
// imgTarget.forEach(img=>imgObserver.observe(img))
////my own code //practice;
const btnLeft = $.querySelector(".slider__btn--left");
const btnRight = $.querySelector(".slider__btn--right");

const slides = $.querySelectorAll(".slide");
//slider
// let curSlide = 0;
// const maxSlide = slides.length;
// const goToSlide = function (slide) {
//   slides.forEach((s, i) => {
//     s.style.transform = `translateX(${(i - slide) * 100}%)`;
//   });
// };
// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) curSlide = 0;
//   else curSlide++;
//   goToSlide(curSlide);
//   activateDot(curSlide)
// }
// const prevSlide = function () {
//   if (curSlide === 0) curSlide = maxSlide - 1;
//   else curSlide--;
//   goToSlide(curSlide);
//   activateDot(curSlide)
// };
// const createDots = function () {
//   slides.forEach((_, i) => {
//     dotCotainer.insertAdjacentHTML('beforeend',
//       `<button class="dots__dot" data-slide="${i}"></button>`)
//   });
// };
// goToSlide(0);
// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', prevSlide);

// document.addEventListener('keydown', (e) => {
//   console.log(e);
//   if (e.key === 'ArrowLeft') prevSlide();
//   else nextSlide();
// });
// const dotCotainer = $.querySelector('.dots');
// createDots();

// dotCotainer.addEventListener('click', (e) => {
//   if (e.target.classList.contains('dots__dot')) {
//     const {slide}=e.target.dataset;
//     goToSlide(slide);
//     activateDot(slide)
//   };
// });
// const dots = $.querySelectorAll('.dots__dot');
// const activateDot = function (slide) {
//   dots.forEach(dot => dot.classList.remove('dot--active'));
//   $.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dot--active')
// };
// activateDot(0);
let curSlide = 0;
let maxSlide = slides.length;
//functions
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`
  });
};
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++
  }
  goToSlide(curSlide)
  curDot(curSlide)
};
const prevSlide = function () {
  console.log('cliked');
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  curDot(curSlide)
};
const curDot = function (curDot) {
  dot.forEach(d => d.classList.remove('dot--active'))
  dot[curDot].classList.add('dot--active');
}
goToSlide(curSlide);
//end function
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  else if (e.key === 'ArrowRight') nextSlide()
  else return;
});
//create dots
slides.forEach((s, i) =>
  dotCotainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`));
dotCotainer.addEventListener('click', (i) => {
  dot.forEach(d => d.classList.remove('dot--active'))
  //the dataSet of dot
  const dataSet = i.target.dataset.slide
  dot.forEach(d => d.classList.remove('dot--active'));
  dot[dataSet].classList.add('dot--active')
  goToSlide(dataSet);
})
const dot = $.querySelectorAll('.dots__dot');

curDot(curSlide);
