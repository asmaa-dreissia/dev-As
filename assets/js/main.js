
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



document.addEventListener("scroll", function() {
  const hero = document.getElementById("hero");
  const parallaxText = document.querySelector(".parallax-text");
  let offset = window.pageYOffset;

  // Agrandissement de l'image de fond
  let scaleFactor = 1 + (offset / 1000); // Ajuster le facteur pour contrôler la vitesse de zoom
  hero.style.backgroundSize = scaleFactor * 100 + "%";

  // Effet parallax sur le texte
  let parallaxOffset = offset * 0.5; // Ajuster le facteur pour contrôler la vitesse du mouvement du texte
  parallaxText.style.transform = `translateY(${parallaxOffset}px)`;
});

// Form submission
emailjs.sendForm('service_omdn9in', 'template_5yjrrdp', '#contact-form').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);