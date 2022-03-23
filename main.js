const formReference = document.querySelector('#form');
const titleReference = document.querySelector('#title');
const categoryReference = document.querySelector('#category');
const releaseReference = document.querySelector('#release');
const imageReference = document.querySelector('#image');

let cardsListReference = document.querySelector('.card-list');

const registerButtonReference = document.querySelector('#registerButton');
const resetButtonReference = document.querySelector('#resetButton');

registerButtonReference.addEventListener('click', event => {
  event.preventDefault();

  const movie = {
    title: titleReference.value,
    category: categoryReference.value,
    release: releaseReference.value,
    url: imageReference.value
  }

  cardsListReference.innerHTML += `
  <div class="card">
    <div class="card-header">
      <img src="${movie.url}" alt="...">
    </div>
    <div class="card-content">
      <p>${movie.title}</p>
      <div>
        <p><span>Categoria: </span><span>${movie.category}</span></p>
        <p><span>Ano de lançamento: </span><span>${movie.release}</span></p>
      </div>
    </div>
  </div>
  `
  formReference.reset();
})
