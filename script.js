document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = [
  {
    src: "images/slider-01.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-02.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-03.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-04.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-05.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-06.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-07.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-08.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-09.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-10.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-11.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-12.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-13.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-14.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-15.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-16.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-17.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-18.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-19.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-20.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-21.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-22.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-23.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-24.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-25.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-26.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-27.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-28.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-29.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-30.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  },
  {
    src: "images/slider-31.jpg",
    alt: "Photography by Yuan Liu",
    caption: "Selected Work / Yuan Liu Studio"
  }
];
  ];

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
    img.src = slide.src;

    img.onload = () => {
      imageCache.set(slide.src, img);
      resolve();
    };

    img.onerror = reject;
  });
}

function preloadNearbyImages(index) {
  const nextOne = (index + 1) % heroSlides.length;
  const nextTwo = (index + 2) % heroSlides.length;
  const nextThree = (index + 3) % heroSlides.length;

  preloadImage(heroSlides[nextOne]);
  preloadImage(heroSlides[nextTwo]);
  preloadImage(heroSlides[nextThree]);
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
    console.error("Image failed to load:", slide.src);

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
