document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    perPage: 2,
    type: "loop",
    drag: "free",
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      640: {
        perPage: 2,
        gap: "0rem",
      },
    },
  }).mount(window.splide.Extensions);
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide2", {
    perPage: 2,
    type: "loop",
    drag: "free",
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      640: {
        perPage: 2,
        gap: "0rem",
      },
    },
  }).mount(window.splide.Extensions);
});

//navbar function
function navToggle() {
  const toggleBtn = document.getElementById("toggle-btn");
  const mblMenu = document.getElementById("mbl-menu");
  const barOne = document.getElementById("bar-1");
  const barTwo = document.getElementById("bar-2");
  const barThree = document.getElementById("bar-3");

  toggleBtn.addEventListener("click", () => {
    mblMenu.classList.toggle("menushow");
    barOne.classList.toggle("bar1");
    barTwo.classList.toggle("bar2");
    barThree.classList.toggle("bar3");
    toggleBtn.classList.toggle("for-mr-top");
  });
}
navToggle();

//accridion fn
//1st col
const firstCol = document.getElementById("1st-col");

firstCol.addEventListener("click", () => {
  firstCol.classList.toggle("firstColheight");
});
//2nd col
const secondCol = document.getElementById("2nd-col");

secondCol.addEventListener("click", () => {
  secondCol.classList.toggle("secondColheight");
});
//3rdd col
const ThirdCol = document.getElementById("3rd-col");

ThirdCol.addEventListener("click", () => {
  ThirdCol.classList.toggle("thirdcolheight");
});
