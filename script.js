document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function isInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function addClassInView() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });
}

window.addEventListener("scroll", addClassInView);

document.addEventListener("DOMContentLoaded", addClassInView);
