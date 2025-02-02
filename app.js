document.addEventListener("DOMContentLoaded", () => {
  let wrapper = document.querySelector(".sliderWrapper");
  let menuItems = document.querySelectorAll(".menuItem");
  let search = document.querySelector(".searchInput");
  let rightBtn = document.querySelectorAll(".fa-angle-right");
  let leftBtn = document.querySelectorAll(".fa-angle-left");
  let white = document.querySelector(".airImg")
  let whiteButton = document.querySelector(".color:nth-child(1)");
  let blackButton = document.querySelector(".color:nth-child(2)");
  let airbutton = document.querySelectorAll(".airbutton");
  let jordanbutton = document.querySelectorAll(".jordanbutton");
  let blazerbutton = document.querySelectorAll(".blazerbutton");
  let craterbutton = document.querySelectorAll(".craterbutton");
  let hippiebutton = document.querySelectorAll(".hippiebutton");
  let product1 = document.querySelector(".product1");
  let product2 = document.querySelector(".product2");
  let product3 = document.querySelector(".product3");
  let product4 = document.querySelector(".product4");
  let product5 = document.querySelector(".product5");
  const black = () => {
    white.setAttribute("src", "img/air2.png");
    white.style.width = "35%"
  }
  const white1 = () => {
    white.setAttribute("src", "img/air.png");
    white.style.width = "30%"
  }
  let i = 0;
  const totalSlides = document.querySelectorAll(".sliderItem").length;

  setInterval(() => {
    i = (i + 1) % totalSlides;
    wrapper.style.transform = `translateX(-${100 * i}vw)`;
  }, 3000);

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      i = index;
      wrapper.style.transform = `translateX(-${100 * i}vw)`;

    });
  });


  rightBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (i < totalSlides - 1) {
        i += 1;
        wrapper.style.transform = `translateX(-${100 * i}vw)`;
      }
    });
  });


  leftBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (i > 0) {
        i -= 1;
        wrapper.style.transform = `translateX(-${100 * i}vw)`;
      }
    });
  });
  search.addEventListener("focus",() => {
    search.style.width = "300px";
  })
  search.addEventListener("blur",() => {
    search.style.width = "200px";
  })
  blackButton.addEventListener("click", () => {
    black();
  })
  whiteButton.addEventListener("click", () => {
    white1();
  });
   airbutton.forEach((button) => {
    button.addEventListener("click", () => {
      product1.scrollIntoView({ behavior: "smooth" });
    });
  });

  jordanbutton.forEach((button) => {
    button.addEventListener("click", () => {
      product2.scrollIntoView({ behavior: "smooth" });
    });
  });

  blazerbutton.forEach((button) => {
    button.addEventListener("click", () => {
      product3.scrollIntoView({ behavior: "smooth" });
    });
  });

  craterbutton.forEach((button) => {
    button.addEventListener("click", () => {
      product4.scrollIntoView({ behavior: "smooth" });
    });
  });

  hippiebutton.forEach((button) => {
    button.addEventListener("click", () => {
      product5.scrollIntoView({ behavior: "smooth" });
    });
  });
});