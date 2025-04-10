import {films} from "./storage.js";

const article = document.querySelector('article')
let html = '';
localStorage.setItem('film', '1')
for (let i = 1; i <= 19; i++) {
    html += `
        <div class="film">
          <button onclick="localStorage.setItem('film', ${i})"><a href="film.html"><img class="film-img" src="${films[i][9]}" alt="film image"></a></button>
          <h2>${films[i][0]}</h2>
          <p>${films[i][2]}</p>
          <p class="age">${films[i][5]}</p>
        </div>
    `
}

article.innerHTML += html;