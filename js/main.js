const scriptOne = document.createElement("script");
scriptOne.src = "https://kit.fontawesome.com/a836538f8f.js";
scriptOne.crossOrigin = "anonymous";
scriptOne.defer = true;

const scriptTwo = document.createElement("script");
scriptTwo.src =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
scriptTwo.defer = true;

document.head.append(scriptOne, scriptTwo);

console.log("test");
