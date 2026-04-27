document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = [
    // Architecture
    {
      src: "images/architecture-01.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Space, structure and atmosphere"
    },
    {
      src: "images/architecture-02.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Urban form and spatial silence"
    },
    {
      src: "images/architecture-03.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Lines, surfaces and distance"
    },
    {
      src: "images/architecture-04.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Structure as visual rhythm"
    },
    {
      src: "images/architecture-05.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Light, material and constructed space"
    },
    {
      src: "images/architecture-06.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Geometry, atmosphere and restraint"
    },
    {
      src: "images/architecture-07.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Architectural surface and urban quietness"
    },
    {
      src: "images/architecture-08.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Form, shadow and spatial order"
    },
    {
      src: "images/architecture-09.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Built space as silent composition"
    },
    {
      src: "images/architecture-10.jpg",
      alt: "Architecture photography by Yuan Liu",
      caption: "Architecture / Structure, distance and visual calm"
    },

    // Street
    {
      src: "images/street-01.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Urban observation and public life"
    },
    {
      src: "images/street-02.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Movement, reflection and public space"
    },
    {
      src: "images/street-03.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Fragments of city life"
    },
    {
      src: "images/street-04.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Distance, rhythm and human traces"
    },
    {
      src: "images/street-05.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Passing moments and urban surfaces"
    },
    {
      src: "images/street-06.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Light, shadow and the movement of the city"
    },
    {
      src: "images/street-07.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Anonymous figures in public space"
    },
    {
      src: "images/street-08.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Urban rhythm and visual fragments"
    },
    {
      src: "images/street-09.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Quiet tension in everyday scenes"
    },
    {
      src: "images/street-10-fixed.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Presence, distance and observation"
    },
    {
      src: "images/street-11.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Traces of movement through the city"
    },
    {
      src: "images/street-12.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Street as image, atmosphere and memory"
    },
    {
      src: "images/street-13.jpg",
      alt: "Street photography by Yuan Liu",
      caption: "Street / Public life, silence and passing time"
    },

    // Portrait
    {
      src: "images/portrait-01.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Presence, character and restraint"
    },
    {
      src: "images/portrait-02.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Quiet presence and direct attention"
    },
    {
      src: "images/portrait-03.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Character, silence and distance"
    },
    {
      src: "images/portrait-04.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Faces, gestures and restrained emotion"
    },
    {
      src: "images/portrait-05.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Human presence in quiet light"
    },
    {
      src: "images/portrait-06.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Stillness, expression and proximity"
    },
    {
      src: "images/portrait-07.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Subtle emotion and visual restraint"
    },
    {
      src: "images/portrait-08.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Direct gaze and inner quietness"
    },
    {
      src: "images/portrait-09.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Gesture, surface and psychological distance"
    },
    {
      src: "images/portrait-10.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Human form in still atmosphere"
    },
    {
      src: "images/portrait-11.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Quiet observation through portraiture"
    },
    {
      src: "images/portrait-12.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Presence, sensitivity and distance"
    },
    {
      src: "images/portrait-13.jpg",
      alt: "Portrait photography by Yuan Liu",
      caption: "Portrait / Portrait as atmosphere and encounter"
    }
  ];

  const heroImage = document.getElementById("heroImage");
  const heroCaption = document.getElementById("heroCaption");
  const heroNext = document.querySelector(".hero-next");
  const heroCounter = document.getElementById("heroCounter");

  if (!heroImage || !heroCaption || !heroNext) {
    return;
  }

  let currentSlide = 0;
  if (heroCounter) {
  heroCounter.textContent = `01 / ${String(heroSlides.length).padStart(2, "0")}`;
}

  function showSlide(index) {
    const slide = heroSlides[index];

    heroImage.classList.add("is-fading");

    setTimeout(() => {
      heroImage.src = slide.src;
      heroImage.alt = slide.alt;
      heroCaption.textContent = slide.caption;

if (heroCounter) {
  heroCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
}

heroImage.classList.remove("is-fading");
    }, 180);
  }

  heroNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
  });
});
