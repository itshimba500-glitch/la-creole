/* ===== HORAIRES : à confirmer avec l'établissement avant publication ===== */
var HORAIRES = "Horaires à confirmer";

(function () {
  "use strict";

  // Renseigner les horaires seulement après confirmation par l'établissement.
  var h = document.getElementById("horaires");
  if (h) h.textContent = HORAIRES;

  // Menu mobile : garde-fous si la structure change ultérieurement.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1000) setOpen(false);
    });
  }

  // Animations progressives : sans JavaScript, le contenu reste visible.
  var items = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!items.length || reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (item) { item.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (item) {
    item.classList.add("reveal-pending");
    observer.observe(item);
  });
})();
