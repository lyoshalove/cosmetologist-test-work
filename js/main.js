window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body"),
        windowWidth = window.outerWidth,
        burger = document.querySelector(".burger"),
        hero = document.querySelector(".hero"),
        catalogCards = document.querySelectorAll(".catalog__card"),
        galleryBtn = document.querySelector(".gallery__btn"),
        modalAbout = document.querySelector(".modal__about-wrapper"),
        anchors = document.querySelectorAll('a[href*="#"]');

  function removeBodyClass() {
    setTimeout(() => {
      body.classList.remove("lock");
    }, 4300);
  }
  removeBodyClass();

  //Burger
  burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    hero.classList.toggle('active');
    body.classList.toggle('lock');
  });

  //Catalog Cards
  body.addEventListener('click', (e) => {
    const target = e.target,
          targetClass = target.className,
          key = 'catalog__card';
    
    if(targetClass.indexOf(key) !== -1) {
      console.log(e.currentTarget);
      if (target.classList.contains("catalog__card-descr") || target.classList.contains("catalog__card-link")) {
        return;
      }
      removeClasses(catalogCards);
      target.parentElement.classList.add('active');
    } else {
      removeClasses(catalogCards);
    }
  });

  function removeClasses(elements) {
    elements.forEach((el) => {
      el.classList.remove("active");
    });
  }


  const bottomFormInputs = document.querySelectorAll(".bottom__form-input");

  bottomFormInputs.forEach((item) => {
    item.addEventListener("blur", () => {
      if (item.value != "") {
        item.nextElementSibling.classList.add("active");
      } else {
        item.nextElementSibling.classList.remove("active");
      }
    });
  });

  //Change button text
  if(windowWidth <= 480) {
    galleryBtn.textContent = "Follow Me On Instagram";
  }

  //Modals
  function modal(modal, openEl,closeEl) {
    const open = document.querySelector(openEl),
          close = document.querySelector(closeEl);

    open.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
      body.classList.add("lock");
    });

    close.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("active");
      body.classList.remove("lock");
    });
  }

  modal(modalAbout, ".about__btn", ".modal__about-cross img");

  //Smooth Scroll
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      if (e.target.className === "burger__menu-link") {
        burger.classList.remove("active");
        hero.classList.remove("active");
        body.classList.remove("lock");
      }

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  //Form Validations
  const validation = new JustValidate("#bottom__form", {
    errorFieldCssClass: "invalid",
    errorLabelStyle: {
      color: "white",
    },
  });

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "This filed is required",
      },
    ])
    .addField("#phone", [
      {
        rule: "maxLength",
        value: 11,
      },
      {
        rule: "required",
        errorMessage: "This filed is required",
      },
      {
        rule: 'number'
      }
    ]);

  //hero-slider
  const heroSlider = new Swiper(".hero__slider", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".hero__slider-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".hero__slider-next",
      prevEl: ".hero__slider-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000
    }
  });

  //testimonials-slider
  const testimonialsSlider = new Swiper(".testimonials__slider", {
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    keyboard: true,
    navigation: {
      nextEl: ".testimonials__slider-next",
      prevEl: ".testimonials__slider-prev",
    },
    effect: "cube",
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
  });

  if(windowWidth <= 992) {
    testimonialsSlider.destroy();
  }

  window.addEventListener("click", (e) => {
    console.log(e.target);
  });
});