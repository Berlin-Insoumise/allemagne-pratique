document.addEventListener("DOMContentLoaded", function() {

  // Ne s’exécute que sur /articles/ (liste des articles)
  if (!window.location.pathname.startsWith("/articles")) {
    console.log("ScrollSpy: not on /articles/, skipping");
    return;
  }

  const sections = document.querySelectorAll("section[id]");
  const menuLinks = document.querySelectorAll("#categories-menu a");

  console.log("ScrollSpy loaded");
  console.log("Sections found:", sections);
  console.log("Menu links found:", menuLinks);

  if (!sections.length || !menuLinks.length) {
    console.log("ScrollSpy: no sections or menu links found, aborting");
    return;
  }

  function onScroll() {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 165; // fallback à 165 si non trouvé
    const scrollPos = window.scrollY + headerHeight;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        currentSectionId = section.id;
      }
    });

    menuLinks.forEach(link => {
      link.classList.remove("active");
      if (link.dataset.target === currentSectionId) {
        link.classList.add("active");
        console.log("Active added to:", link.dataset.target);
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // état initial
});
