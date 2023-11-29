export function importScript() {
  const scriptOne = document.createElement("script");
  scriptOne.src = "https://kit.fontawesome.com/a836538f8f.js";
  scriptOne.crossOrigin = "anonymous";

  const scriptTwo = document.createElement("script");
  scriptTwo.src =
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";

  document.body.append(scriptOne, scriptTwo);
}
