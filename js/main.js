// ===== IDIOMA EN | ES =====
const langButton = document.querySelector(".lang-toggle");

function setLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  if (window.ScrollTrigger) ScrollTrigger.refresh(); // recalcula animaciones porque cambian los altos
}

langButton.addEventListener("click", () => {
  const next = document.documentElement.lang === "es" ? "en" : "es";
  setLang(next);
});

// ===== MENÚ: fondo sólido al bajar =====
const nav = document.querySelector(".nav");
const updateNav = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

// ===== ANIMACIONES =====
gsap.registerPlugin(ScrollTrigger);

// Entrada del hero: el logo se dibuja, se rellena y luego aparece el texto
const intro = gsap.timeline();
intro
  .fromTo(".hero__logo",
    { strokeDashoffset: 1, fillOpacity: 0 },
    { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" })
  .to(".hero__logo", { fillOpacity: 1, duration: 0.8, ease: "power1.out" }, "-=0.4")
  .from(".hero__kicker, .hero__title, .hero__sub", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.6");

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
