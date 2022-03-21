let titleMovie = document.querySelector('#titleId')
let categoryMovie = document.querySelector('#categoryId')
let releaseMovie = document.querySelector('#releaseId')
let imageMovie = document.querySelector('#imageId')
let buttonSubmit = document.querySelector('#register')

let mainContentReference = document.querySelector('#mainContent')

// movies = [
//     {
//         title: 'banana',
//         release: 2019,
//         category: 'banana',
//         image: 'https://br.web.img3.acsta.net/pictures/19/02/07/14/16/5034340.jpg'
//     }
// ]

buttonSubmit.addEventListener('click', function(event){
    
    event.preventDefault()

    let movies = []
    let movie = { title: titleMovie.value, category: categoryMovie.value, release: releaseMovie.value, image: imageMovie.value };
    movies.push(movie);
    console.log (movies);

    for(let post of movies) {
    
        mainContentReference.innerHTML += `
    
            <div class="item">
                <img src="${post.image}">
                <h2>${post.title}</h2>
                <h2>${post.category}</h3>
                <p>${post.release}</p>
            </div>
    
        `
    }
    
})
