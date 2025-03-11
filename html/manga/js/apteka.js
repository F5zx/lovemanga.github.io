const switchLeft = document.querySelector(".manga__switch__left");
const switchRight = document.querySelector(".manga__switch__right");

const mangaName = "ichigo";
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

const pages = [1, 2, 3, 4, 5, 6, 7, 8];
const image = document.querySelector(".manga__image");
let currentPage = Number(image.src.split("/").pop().split(".")[0]);

switchLeft.addEventListener("click", () => {
  if (currentPage <= 1) {
    image.src = `../../img/apteka/${pages[pages.length - 1]}.jpg`;
    currentPage = pages.length;
  } else {
    image.src = `../../img/apteka/${currentPage - 1}.jpg`;
    --currentPage;
  }
});

switchRight.addEventListener("click", () => {
  if (currentPage >= pages.length) {
    image.src = `../../img/apteka/${pages[0]}.jpg`;
    currentPage = 1;
  } else {
    image.src = `../../img/apteka/${currentPage + 1}.jpg`;
    ++currentPage;
  }
});
