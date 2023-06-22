// Поиск

function clearSearchInput() {
  const inputBlock = document.querySelector('.A_Input')

  inputBlock.addEventListener("focus", () =>{
     inputBlock.value = " ";
  })

  inputBlock.addEventListener("blur", () =>{
     inputBlock.value = "Поиск...";
  })
}

function initSearch() {
  const searchFormElement = document.querySelector('.M_SearchForm')
  const searchInputElement = searchFormElement.querySelector('.A_SearchInput')
  const searchButtonElement = searchFormElement.querySelector('.A_SearchButton')

  searchInputElement.addEventListener('input', (e) => {
    const requestText = e.target.value
    console.log(requestText)
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  clearSearchInput();
  initSearch();
});
