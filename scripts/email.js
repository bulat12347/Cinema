import {films} from "./storage.js";

const film = Number(localStorage.getItem('film') || '1');
const filmInfo = films[film];

const article = document.querySelector('article')
const aside = document.querySelector('aside');

const time = localStorage.getItem('time');

const formattedDate = localStorage.getItem('date');

const articleHTML = `
    <div class="film">
      <img src="${filmInfo[9]}" alt="film image">
      <div class="film-info">
        <p class="age">${filmInfo[5]}</p>
        <h2>${filmInfo[0]}</h2>
        <p class="info">Москва, Ярцевская улица, 19, МФК Кунцево Плаза</p>
        <p class="info">${formattedDate} | ${time} | Зал 4</p>
      </div>
    </div>
`

article.innerHTML = articleHTML;

const tickets = JSON.parse(localStorage.getItem('tickets'));
const ticketGrid = document.querySelector('.info-flex1');
let ticketHTML = '';

const totalPrice = document.querySelector('.total-price');
let price = 0;

tickets.forEach((value) => {
    ticketHTML += `
        <div class="ticket">
          <span class="sit-place">Ряд ${value[0]} | Место ${value[1]}</span>
          <span>Стандартное</span>
          <span style="margin-left: 5vw; font-weight: 700">500 ₽</span>
        </div>
    `;
    price += 500;
});

ticketGrid.innerHTML = ticketHTML;
totalPrice.innerText = `${price} ₽`;

const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const oplataA = document.querySelector('.oplataA');
const oplata = oplataA.querySelector('button');

function oplataChange() {
    if (inputEmail.value !== '' && inputPhone.value !== '') {
        if (!oplata.classList.contains('active')) {
            oplata.classList.add('active');
            oplataA.href = "#";
        }
    } else {
        if (oplata.classList.contains('active')) {
            oplata.classList.remove('active');
            oplataA.href = "";
        }
    }
}

inputEmail.addEventListener('change', oplataChange);
inputPhone.addEventListener('change', oplataChange);