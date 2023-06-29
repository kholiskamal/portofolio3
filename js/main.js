const bgAnimation = document.getElementById("bgAnimation");
// variabel Js
const numberOfColorBoxes = 400;
for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("colorBox");
  bgAnimation.append(colorBox);
}
// responsive
// const menuIcon = document.querySelector("#menu-icon");
// const container = document.querySelector(".navbar");
// const navbg = document.querySelector(".nav-bg");
// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
//   navbg.classList.toggle("active");
// });
