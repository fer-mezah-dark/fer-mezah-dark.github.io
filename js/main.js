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

// ===== PROYECTOS: tarjetas, filtro y ventana de detalle =====
const CAT_NAMES = {
  "3d":    { en: "3D", es: "3D" },
  games:   { en: "Games", es: "Videojuegos" },
  video:   { en: "Video & Audio", es: "Video y Audio" },
  uiux:    { en: "UI/UX", es: "UI/UX" },
  graphic: { en: "Graphic", es: "Gráfico" },
  web:     { en: "Web", es: "Web" }
};

// Escribe un texto en los dos idiomas (el CSS muestra solo el activo)
const bi = (t) => t ? `<span lang="en">${t.en}</span><span lang="es">${t.es}</span>` : "";

const initials = (title) =>
  title.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9 ]/g, " ").split(" ").filter(Boolean)
       .slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function cardHTML(p) {
  const media = p.cover
    ? `<img src="${p.cover}" alt="${p.title}" loading="lazy">`
    : `<span class="card__placeholder">${initials(p.title)}</span>`;
  const tags = p.cats.map((c) => bi(CAT_NAMES[c])).join(" · ");
  return `
    <button class="card reveal" type="button" data-open="${p.id}" data-cats="${p.cats.join(" ")}">
      <div class="card__media">${media}</div>
      <div class="card__info">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__role">${bi(p.role)}</p>
        <p class="card__tags">${tags}</p>
      </div>
    </button>`;
}

const featuredGrid = document.getElementById("featured-grid");
const moreGrid = document.getElementById("more-grid");
featuredGrid.innerHTML = PROJECTS.filter((p) => p.featured).map(cardHTML).join("");
moreGrid.innerHTML = PROJECTS.filter((p) => !p.featured).map(cardHTML).join("");

// Filtro de "Más proyectos"
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    moreGrid.querySelectorAll(".card").forEach((card) => {
      const show = f === "all" || card.dataset.cats.split(" ").includes(f);
      card.classList.toggle("is-hidden", !show);
    });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
});

// Ventana de detalle
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;

  const ytHTML = (v) => `
    <div class="modal__video">
      <iframe src="https://www.youtube-nocookie.com/embed/${v}" title="${p.title}" loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
    </div>`;
  const imgHTML = (src) => `<img src="${src}" alt="${p.title}" loading="lazy">`;
  const sketchfabHTML = (uid) => `
    <div class="modal__video">
      <iframe src="https://sketchfab.com/models/${uid}/embed?ui_theme=dark" title="${p.title} 3D" loading="lazy"
        allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
    </div>`;

  let videos = "", images = "";
  if (p.media) {
    // Orden libre: "assets/img/x.jpg" = imagen, { yt: "ID" } = YouTube, { sketchfab: "UID" } = visor 3D
    images = p.media.map((m) =>
      typeof m === "string" ? imgHTML(m) : m.yt ? ytHTML(m.yt) : m.sketchfab ? sketchfabHTML(m.sketchfab) : ""
    ).join("");
  } else {
    videos = p.videos.map(ytHTML).join("");
    images = p.images.map(imgHTML).join("");
  }
  const empty = (!videos && !images)
    ? `<div class="modal__empty">${bi({ en: "Images coming soon", es: "Imágenes muy pronto" })}</div>` : "";
  const links = p.links.length
    ? `<div class="modal__links">${p.links.map((l) =>
        `<a href="${l.url}" target="_blank" rel="noopener">${bi(l)} &nearr;</a>`).join("")}</div>` : "";

  modalContent.innerHTML = `
    <p class="modal__kicker">${p.cats.map((c) => bi(CAT_NAMES[c])).join(" · ")}</p>
    <h2 class="modal__title">${p.title}</h2>
    <div class="modal__meta">
      <span>${bi(p.role)}</span>
      ${p.year ? `<span>${p.year}</span>` : ""}
      ${p.tools ? `<span>${p.tools}</span>` : ""}
    </div>
    <p class="modal__desc">${bi(p.desc)}</p>
    <div class="modal__media">${videos}${images}${empty}</div>
    ${links}
    ${p.note ? `<p class="modal__note">${bi(p.note)}</p>` : ""}`;

  modal.showModal();
  modal.scrollTop = 0;
  document.body.classList.add("modal-open");
}

function closeProject() {
  modal.close();
}

// ===== VISOR DE IMÁGENES CON ZOOM =====
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <button class="lightbox__close" type="button" aria-label="Close">&times;</button>
  <div class="lightbox__stage"><img alt=""></div>
  <p class="lightbox__hint">${bi({ en: "Click to zoom · Drag to move · Esc to close", es: "Clic para acercar · Arrastra para moverte · Esc para cerrar" })}</p>`;
modal.appendChild(lightbox);
const lbStage = lightbox.querySelector(".lightbox__stage");
const lbImg = lightbox.querySelector("img");
let drag = null;
let moved = false;

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.remove("is-zoomed");
  lightbox.classList.add("is-open");
}
function closeLightbox() {
  lightbox.classList.remove("is-open", "is-zoomed");
}

// Clic en una imagen de la galería: abre el visor
modalContent.addEventListener("click", (e) => {
  const img = e.target.closest(".modal__media img");
  if (img) openLightbox(img.src);
});

// Clic en la imagen del visor: acerca / aleja en el punto donde diste clic
lbImg.addEventListener("click", (e) => {
  if (moved) return;
  const r = lbImg.getBoundingClientRect();
  const fx = (e.clientX - r.left) / r.width;
  const fy = (e.clientY - r.top) / r.height;
  const zoomed = lightbox.classList.toggle("is-zoomed");
  if (zoomed) {
    requestAnimationFrame(() => {
      lbStage.scrollLeft = fx * lbImg.offsetWidth - lbStage.clientWidth / 2;
      lbStage.scrollTop = fy * lbImg.offsetHeight - lbStage.clientHeight / 2;
    });
  }
});

// Arrastrar con el mouse para moverse cuando está acercada
lbStage.addEventListener("mousedown", (e) => {
  if (!lightbox.classList.contains("is-zoomed")) return;
  e.preventDefault();
  drag = { x: e.clientX, y: e.clientY, left: lbStage.scrollLeft, top: lbStage.scrollTop };
  moved = false;
  lightbox.classList.add("is-dragging");
});
window.addEventListener("mousemove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
  lbStage.scrollLeft = drag.left - dx;
  lbStage.scrollTop = drag.top - dy;
});
window.addEventListener("mouseup", () => {
  if (!drag) return;
  drag = null;
  lightbox.classList.remove("is-dragging");
  setTimeout(() => { moved = false; }, 0);
});

// Cerrar el visor: botón X, clic en el fondo o tecla Esc
lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lbStage.addEventListener("click", (e) => { if (e.target === lbStage && !moved) closeLightbox(); });
modal.addEventListener("cancel", (e) => {
  if (lightbox.classList.contains("is-open")) { e.preventDefault(); closeLightbox(); }
});

modal.addEventListener("close", () => {
  closeLightbox();
  document.body.classList.remove("modal-open");
  modalContent.innerHTML = ""; // detiene los videos al cerrar
});
modal.querySelector(".modal__close").addEventListener("click", closeProject);
modal.addEventListener("click", (e) => {             // clic fuera de la ventana
  if (lightbox.classList.contains("is-open")) return;  // no cerrar si el visor de zoom está abierto
  const r = modal.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (outside) closeProject();
});

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-open]");
  if (trigger) openProject(trigger.dataset.open);
});

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
