("use strict");
// import "animate.css";

// contact button hide and show
var ContactModal = document.querySelector(".contact-modal");

let Contact = document
  .getElementById("contact")
  .addEventListener("click", function () {
    ContactModal.classList.remove("hide");
  });
let CloseModal = document
  .querySelector(".close-modal")
  .addEventListener("click", function () {
    ContactModal.classList.add("hide");
  });

// WOW active
// new WOW().init();
// const portfolio = fetch("../portfolioData.js")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     return data;
//   });
// console.log(portfolio);

const data = [
  {
    id: 2,
    type: "Residential",
    address: "12. Moonshot, Enugu",
    image: "./images/pexels-jvalenciazz-jhon-12845907.jpg",
  },
  {
    id: 3,
    type: "Office",
    address: "14. Independence Layout, Enugu",
    image: "./images/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
  },
  {
    id: 4,
    type: "Residential",
    address: "124. GRA, Enugu",
    image: "./images/hero-image1.jpg",
  },
  {
    id: 5,
    type: "Religious",
    address: "38. New Road, Enugu",
    image: "./images/osman-rana-JcSsu-NF3qo-unsplash.jpg",
  },
];

let number = 1;
const renderPortfolio = function () {
  const siteType = document.querySelector(".site-type");
  const siteAddress = document.querySelector(".site-address");
  const siteImage = document.getElementById("site-image");
  data.map((e) => {
    if (e.id === number) {
      siteType.textContent = e.type;
      siteAddress.textContent = e.address;
      siteImage.src = e.image;
      console.log(e.image);
      // siteImage.innerHTML = "<img src =" + e.image + ">";
    }
  });
};
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
previousBtn.addEventListener("click", function () {
  if (number >= 2) {
    number--;
  }
  renderPortfolio();
});
nextBtn.addEventListener("click", function () {
  if (number <= 4) {
    number++;
  }
  renderPortfolio();
});
