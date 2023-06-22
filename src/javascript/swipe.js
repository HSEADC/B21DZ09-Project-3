// Скролл фильтров

const lastTag = document.getElementById('lasttag')
const firstTag = document.getElementById('firsttag')

function filtersScrollToRight() {
  lastTag.scrollIntoView({
    behavior: "auto",
    block: "nearest",
    inline: "nearest"}
  );
}

function filtersScrollToLeft() {
  firstTag.scrollIntoView({
    behavior: "auto",
    block: "nearest",
    inline: "nearest"}
  );
}

document.getElementById('RightButton').addEventListener("click", filtersScrollToRight);
document.getElementById('LeftButton').addEventListener("click", filtersScrollToLeft);
