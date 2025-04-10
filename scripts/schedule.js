import {films} from "./storage.js";

const film = Number(localStorage.getItem('film') || '1');
const filmInfo = films[film];

const article = document.querySelector('article')

let ticketHTML = '';
filmInfo[4].forEach((value) => {
    ticketHTML += `<a href="sit.html" data-time="${value}" onclick="localStorage.setItem('time', this.dataset.time);">
        <button><span class="time">${value}</span><span>500 ₽</span></button>
    </a>`
});

const today = localStorage.getItem('day') || 'today';
let date = new Date();


if (today === 'tomorrow') {
    date = new Date(Date.now() + 1000*60*60*24);
}

const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const dayOfWeek = daysOfWeek[date.getDay()];
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;
localStorage.setItem('date', formattedDate);

const html = `
    <div class="film">
      <img src="${filmInfo[9]}" alt="film image">
      <div class="film-info">
        <p class="age">${filmInfo[5]}</p>
        <h2>${filmInfo[0]}</h2>
        <p class="info">${filmInfo[1]}  |  ${filmInfo[2]}  |  ${filmInfo[3]}</p>
        <a href="film.html"><button>О фильме</button></a>
      </div>
    </div>
    <div class="date">
      <div>
          <a onclick="localStorage.setItem('day', 'today');" href="schedule.html">СЕГОДНЯ</a>
          <a onclick="localStorage.setItem('day', 'tomorrow');" href="schedule.html">ЗАВТРА</a>
      </div>
      <h4>${formattedDate}</h4>
    </div>
    <div class="tickets">
      ${ticketHTML}
    </div>
`;

article.innerHTML = html;