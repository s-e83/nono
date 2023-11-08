anime({
  targets: "#Layer_1 path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2500,
  delay: 0,
  direction: "alternate",
  loop: false,
});

// --------- Animations //

function createIntersectionObserver(classToToggle) {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add(classToToggle);
        observerText.unobserve(entry.target);
      } else {
        entry.target.classList.remove(classToToggle);
      }
    });
  });
}

//

const observerText = createIntersectionObserver("show-text");
const hiddenElementsText = document.querySelectorAll(".text");
hiddenElementsText.forEach((el) => observerText.observe(el));
//
