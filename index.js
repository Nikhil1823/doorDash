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

window.onscroll = function () {
  const tabHeader = document.getElementById("tab-header");
  console.log("hi");
  console.log(window.innerWidth);

  if (document.documentElement.scrollTop > 150 && window.innerWidth >= 768) {
    tabHeader.style.display = "flex";
    console.log("scrolled psat 200");
  }
};
