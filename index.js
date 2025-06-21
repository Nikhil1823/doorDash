const keyPair = {
  cuisines: "top-cuisine",
  cities: "top-city",
  chains: "top-chain",
};

Object.entries(keyPair).forEach(([buttonId, divId]) => {
  const button = document.getElementById(buttonId);
  const div = document.getElementById(divId);
  button.addEventListener("click", function () {
    Object.entries(keyPair).forEach(([otherBtnId, otherDivId]) => {
      document.getElementById(otherBtnId).classList.remove("selected");
      document.getElementById(otherDivId).style.display = "none";
    });

    button.classList.add("selected");
    div.style.display = "block";
  });
});

const seeMore = document.getElementById("see-more");
const arrowBtn = document.getElementById("arrow-button");
const arrow = arrowBtn.querySelector("#svg-arrow");

const moreDiv = document.getElementsByClassName("hiden");
arrowBtn.addEventListener("click", function () {
  Array.from(moreDiv).forEach(function (div) {
    div.classList.toggle("show-all");
  });
  seeMore.textContent =
    seeMore.textContent === "See more" ? "See less" : "See more";
  arrow.classList.toggle("rotated");
});

// window.onscroll = function () {
//   const tabHeader = document.getElementById("tab-header");
//   const buttonDiv = document.getElementsByClassName("button-div-2 ");

//   console.log("hi");
//   console.log(window.innerWidth);
//   const logo = document.getElementById("hide-logo");
//   console.log(buttonDiv);

//   if (document.documentElement.scrollTop > 150 && window.innerWidth >= 768) {
//     tabHeader.style.display = "flex";
//     tabHeader.style.position = "sticky";
//     buttonDiv[0].style.display = "flex";
//     tabHeader.style.top = 0;
//     tabHeader.style.backgroundColor = "white";
//     logo.style.display = "block";
//     tabHeader.style.paddingRight = "8px";
//     // tabHeader.classList.add("tab-header-adjustment");
//     console.log("scrolled psat 200");
//   } else if (
//     window.innerWidth >= 768 &&
//     document.documentElement.scrollTop < 150
//   ) {
//     logo.style.display = "none";
//     // buttonDiv[0].style.display - "flex";
//     tabHeader.style.position = "absolute";
//     tabHeader.style.top = "12px";
//     tabHeader.style.backgroundColor = "transparent";
//     tabHeader.style.paddingRight = 0;
//   } else {
//     tabHeader.style.display = "none";
//   }
// };

// window.onload = function () {
//   if (window.innerWidth < 768) {
//     const buttonDiv = document.getElementsByClassName("button-div-2 ");
//     const tabHeader = document.getElementById("tab-header");
//     tabHeader.style.display = "none";
//     buttonDiv[0].style.display = "none";
//   }
// };
