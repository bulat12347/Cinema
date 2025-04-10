import {films} from "./storage.js";

const film = Number(localStorage.getItem('film') || '1');
const filmInfo = films[film];

const article = document.querySelector('article')
const html = `
    <div class="film">
      <img src="${filmInfo[9]}" alt="film image">
      <div class="film-info">
        <p class="age">${filmInfo[5]}</p>
        <h2>${filmInfo[0]}</h2>
        <p class="info">${filmInfo[1]} | ${filmInfo[2]} | ${filmInfo[3]}</p>
        <a href="schedule.html"><button>Купить билет</button></a>
        <div>
          <h4>Режиссер:</h4>
          <p>${filmInfo[6]}</p>
        </div>
        <div>
          <h4>В ролях:</h4>
          <p>${filmInfo[7]}</p>
        </div>
      </div>
    </div>
    <h4>Описание:</h4>
    <p>${filmInfo[8]}</p>
`

article.innerHTML = html;