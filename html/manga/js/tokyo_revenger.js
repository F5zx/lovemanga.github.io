const switchLeft = document.querySelector(".manga__switch__left");
const switchRight = document.querySelector(".manga__switch__right");

const mangaName = "Tokyo Revenger";
const allMangas = localStorage.getItem("mangas");

if (allMangas) {
  const mangas = JSON.parse(allMangas);
  if (!mangas.includes(mangaName)) {
    mangas.push(mangaName);
    localStorage.setItem("mangas", JSON.stringify(mangas));
  }
} else {
  localStorage.setItem("mangas", JSON.stringify([mangaName]));
}

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60, 61
];
const image = document.querySelector(".manga__image");
let currentPage = Number(image.src.split("/").pop().split(".")[0]);

switchLeft.addEventListener("click", () => {
  if (currentPage <= 1) {
    image.src = `../../img/tokyo_revenger/${pages[pages.length - 1]}.jpg`;
    currentPage = pages.length;
  } else {
    image.src = `../../img/tokyo_revenger/${currentPage - 1}.jpg`;
    --currentPage;
  }
});

switchRight.addEventListener("click", () => {
  if (currentPage >= pages.length) {
    image.src = `../../img/tokyo_revenger/${pages[0]}.jpg`;
    currentPage = 1;
  } else {
    image.src = `../../img/tokyo_revenger/${currentPage + 1}.jpg`;
    ++currentPage;
  }
});
