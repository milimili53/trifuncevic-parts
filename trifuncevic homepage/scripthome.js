const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);

  /*
  console.log(entries);
  const numInfo = entries[3];
  console.log(numInfo);
  if (numInfo.isIntersecting === true) {
    updateCount();
  }
  */
};

/*
const revealInfo = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  /*
  updateCount()
  */
/*
  if (entry.isIntersecting) {
    updateCount();
  }

  observer.unobserve(entry.target);
};
*/

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

/*
const infoObserver = new IntersectionObserver(revealInfo, {
  root: null,
  threshold: 0.15,
});
*/

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// infoObserver.observe(infoSection);

//infoSection.addEventListener("scrollintoView");

// Select the element you want to observe
const infoSection = document.querySelector(".nums-info");
// const targetElement = document.querySelector('#target-element');

// Create a new IntersectionObserver instance with a callback function
const observer = new IntersectionObserver((entries) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // If the target element is in view
    if (entry.isIntersecting) {
      // Call your function here
      updateCount();
    }
  });
});

// Start observing the target element
observer.observe(infoSection);

/////////////////////////////////////////////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  /*
  for (var i = 0; i < slides.length; i++) {
    setTimeout(nextSlide, 3000);
  }
*/
  setInterval(nextSlide, 5000);
};
slider();

const sliderDIV = document.querySelector(".slider");

sliderDIV.addEventListener("mouseenter", function () {
  const sliderBtn = document.querySelectorAll(".slider__btn");

  sliderBtn.forEach((btn) => {
    btn.classList.remove("none");
  });
});

sliderDIV.addEventListener("mouseleave", function () {
  const sliderBtn = document.querySelectorAll(".slider__btn");

  sliderBtn.forEach((btn) => {
    btn.classList.add("none");
  });
});

let count1 = 0;
let count2 = 0;
let count3 = 0;
let target1 = 45;
let target2 = 1000;
let target3 = 50;
let speed = 30;

function updateCount() {
  if (count1 < target1) {
    count1++;
    document.querySelector("#count1").textContent = count1;
  }
  if (count2 < target2) {
    count2 += 10;
    document.querySelector("#count2").textContent = count2 + "+";
  }
  if (count3 < target3) {
    count3++;
    document.querySelector("#count3").textContent = count3;
  }
  if (count1 < target1 || count2 < target2 || count3 < target3) {
    setTimeout(updateCount, speed);
  }
}

//updateCount()
