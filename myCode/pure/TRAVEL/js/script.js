const ACTIVE = "active";
const video_active = document.querySelectorAll(
  ".main-structure .content video"
);
const video_overlay = document.querySelector(".video-overlay");
const menu_logo = document.querySelector("header .menu-logo");
const menu_button = document.querySelectorAll(".aside-menu a");
const main_structure = document.querySelector(".main-structure");
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link = document.querySelector(".content .text-description a");

video_active[0].classList.remove(ACTIVE);
video_active[0].classList.add(ACTIVE);
// video_overlay.className = "video-overlay video-overlay-island";

main_header.innerHTML = CONTENT_INFO.island.h1;
second_header.innerHTML = CONTENT_INFO.island.h2;
paragraph.innerHTML = CONTENT_INFO.island.p;
text_link.innerHTML = "Explore";

menu_logo.addEventListener("click", () => {
  menu_logo.classList.toggle(ACTIVE);
  main_structure.classList.toggle(ACTIVE);
});

menu_button.forEach((item, index) => {
  item.addEventListener("click", () => {
    const key = item.innerText.toLowerCase();
    video_active.forEach((video) => {
      video.classList.remove(ACTIVE);
    });
    video_active[index].classList.add(ACTIVE);
    video_overlay.className = `video-overlay video-overlay-${key}`;
    main_header.innerHTML = CONTENT_INFO[key].h1;
    second_header.innerHTML = CONTENT_INFO[key].h2;
    paragraph.innerHTML = CONTENT_INFO[key].p;
    // changeOverLay(index);
  });
});

function changeOverLay(index) {
  switch (index) {
    case 0:
      video_overlay.className = "video-overlay video-overlay-island";
      break;
    case 1:
      video_overlay.className = "video-overlay video-overlay-spring";
      break;
    case 2:
      video_overlay.className = "video-overlay video-overlay-summer";
      break;
    case 3:
      video_overlay.className = "video-overlay video-overlay-autumn";
      break;
    case 4:
      video_overlay.className = "video-overlay video-overlay-winter";
      break;
  }
}
