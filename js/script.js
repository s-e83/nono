anime({
  targets: "#Layer_1 path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2500,
  delay: 0,
  direction: "alternate",
  loop: false,
  complete: function (anim) {
    // عند انتهاء التحريك
    var paths = document.querySelectorAll("#Layer_1 path");
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.fill = "#fff"; // قم بتغيير لون كل مسار
      paths[i].style.transition = "0.5s";
    }
  },
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
