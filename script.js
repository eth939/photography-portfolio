document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = [
    {
      src: "images/architecture-01.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Space, structure and atmosphere"
    },
    {
      src: "images/street-01.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Urban observation and public life"
    },
    {
      src: "images/portrait-01.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Presence, character and restraint"
    }
  ];

  const heroImage = document.getElementById("heroImage");
  const heroCaption = document.getElementById("heroCaption");
  const heroNext = document.querySelector(".hero-next");

  if (!heroImage || !heroCaption || !heroNext) return;

  let currentSlide = 0;

  heroNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    const nextSlide = heroSlides[currentSlide];

    heroImage.classList.add("is-fading");

    setTimeout(() => {
      heroImage.src = nextSlide.src;
      heroImage.alt = nextSlide.alt;
      heroCaption.textContent = nextSlide.caption;
      heroImage.classList.remove("is-fading");
    }, 180);
  });
});
