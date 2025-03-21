/*go to project 1,2,3 and 4 on home*/
const projects = document.querySelectorAll(".wrapper div .overlay");
projects.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*go to home, services, about, projects and contact when in one of the projects*/
const goTo = document.querySelectorAll(".header .goTo");
goTo.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*go back to projects when in one of the projects*/
const goBackBtn = document.querySelector(".secondChild div div");
try {
  goBackBtn.addEventListener("click", () => {
    window.location.href = "index.html#projects";
  });
} catch (error) {
  console.log(error);
}

/*show/ hide the .menu*/
const menuBtn = document.querySelector(".header2 img:nth-child(2)");
const menu = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".menu img");

try {
  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.classList.add("no-scroll"); // Disable scrolling
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll"); // Re-enable scrolling
  });
} catch (error) {
  console.log(error);
}

/*go back button for mobile*/
const mobileGoBackBtn = document.querySelector(
  ".main .secondChild div:nth-child(3)"
);
try {
  mobileGoBackBtn.addEventListener("click", () => {
    window.location.href = "index.html#projects";
  });
} catch (error) {
  console.log(error);
}

/*navigate through menu on mobile*/
const menuElements = menu.querySelectorAll(".menu h2");
menuElements.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.remove(
      "active"
    ); /*if u only remove this class the below will continue*/
    document.body.classList.remove(
      "no-scroll"
    ); /*this class if not removed it'll brake the page not allowing it to scroll*/
    window.location.href = element.dataset.url;
  });
});
