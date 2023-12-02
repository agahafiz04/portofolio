const scriptOne = document.createElement("script");
scriptOne.src = "https://kit.fontawesome.com/a836538f8f.js";
scriptOne.crossOrigin = "anonymous";
scriptOne.defer = true;

const scriptTwo = document.createElement("script");
scriptTwo.src =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
scriptTwo.async = true;

document.head.append(scriptOne, scriptTwo);

// swiper element

const swiperEl = document.querySelector("swiper-container");

const getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

const currentElement = swiperEl.children[0];

const currentElementSiblings = getSiblings(currentElement);
currentElementSiblings.forEach((el) => {
  const tech = el.querySelector(".tech");
  tech.style.opacity = 0;
});

swiperEl.addEventListener("swiperslidechange", (event) => {
  if (swiperEl.swiper === undefined) {
    return;
  }

  const currentSlide = swiperEl.swiper.activeIndex;
  const currentElement = swiperEl.children[currentSlide];
  const tech = currentElement.querySelector(".tech");
  tech.style.opacity = 1;

  const currentElementSiblings = getSiblings(currentElement);
  currentElementSiblings.forEach((el) => {
    const tech = el.querySelector(".tech");
    tech.style.opacity = 0;
  });
});

const mediaQueryTwo = window.matchMedia("(max-width: 1200px)");

if (mediaQueryTwo.matches) {
  swiperEl.setAttribute("slides-per-view", "1");
}

mediaQueryTwo.onchange = (e) => {
  if (e.matches) {
    swiperEl.setAttribute("slides-per-view", "1");
  } else {
    swiperEl.setAttribute("slides-per-view", "2");
  }
};
