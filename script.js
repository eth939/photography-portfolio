document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = Array.from({ length: 31 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      src: `images/slider-${number}.jpg`,
      alt: "Photography by Yuan Liu",
      caption: "Selected Work / Yuan Liu Studio"
    };
  });

  const heroImage = document.getElementById("heroImage");
  const heroCaption = document.getElementById("heroCaption");
  const heroNext = document.querySelector(".hero-next");
  const heroCounter = document.getElementById("heroCounter");

  if (!heroImage || !heroCaption || !heroNext) {
    return;
  }

  let currentSlide = 0;
  const imageCache = new Map();

  function formatCounter(index) {
    return `${String(index + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
  }

  function preloadImage(slide) {
    if (!slide || imageCache.has(slide.src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        imageCache.set(slide.src, img);
        resolve();
      };

      img.onerror = () => {
        reject(new Error(`Failed to load image: ${slide.src}`));
      };

      img.src = slide.src;
    });
  }

  function preloadNearbyImages(index) {
    const nextOne = (index + 1) % heroSlides.length;
    const nextTwo = (index + 2) % heroSlides.length;
    const nextThree = (index + 3) % heroSlides.length;

    preloadImage(heroSlides[nextOne]).catch(() => {});
    preloadImage(heroSlides[nextTwo]).catch(() => {});
    preloadImage(heroSlides[nextThree]).catch(() => {});
  }

  async function showSlide(index) {
    const slide = heroSlides[index];

    heroNext.disabled = true;
    heroNext.classList.add("is-loading");

    try {
      await preloadImage(slide);

      heroImage.classList.add("is-fading");

      setTimeout(() => {
        heroImage.src = slide.src;
        heroImage.alt = slide.alt;
        heroCaption.textContent = slide.caption;

        if (heroCounter) {
          heroCounter.textContent = formatCounter(index);
        }

        heroImage.classList.remove("is-fading");
        heroNext.disabled = false;
        heroNext.classList.remove("is-loading");

        preloadNearbyImages(index);
      }, 120);
    } catch (error) {
      console.error(error);

      heroNext.disabled = false;
      heroNext.classList.remove("is-loading");
    }
  }

  heroNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
  });

  if (heroCounter) {
    heroCounter.textContent = formatCounter(currentSlide);
  }

  preloadNearbyImages(currentSlide);
});
