// Activar el plugin de animaciones con scroll
gsap.registerPlugin(ScrollTrigger);

// Animación de entrada del hero
gsap.from(".hero__kicker, .hero__title, .hero__sub", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power3.out"
});

// Todo lo que tenga la clase "reveal" aparece al hacer scroll
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%" }
  });
});
