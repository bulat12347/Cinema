import {films} from "./storage.js";

const film = Number(localStorage.getItem('film') || '1');
const filmInfo = films[film];

const article = document.querySelector('article')

const time = localStorage.getItem('time');

const formattedDate = localStorage.getItem('date');

const html = `
    <div class="film">
      <img src="${filmInfo[9]}" alt="film image">
      <div class="film-info">
        <p class="age">${filmInfo[5]}</p>
        <h2>${filmInfo[0]}</h2>
        <p class="info">Москва, Ярцевская улица, 19, МФК Кунцево Плаза</p>
        <p class="info">${formattedDate} | ${time} | Зал 4</p>
      </div>
    </div>
    <div class="theatre">
      <div class="screen"></div>
      <div class="sits">
        <div class="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
        <div class="actual-sits">
          <div>
            <button data-row="6">1</button>
            <button data-row="7">1</button>
            <button data-row="8" class="closen">1</button>
          </div>
          <div>
            <button data-row="1">1</button>
            <button data-row="2" class="closen">1</button>
            <button data-row="3" class="closen">1</button>
            <button data-row="4">1</button>
            <button data-row="5">1</button>
            <button data-row="6" class="closen">2</button>
            <button data-row="7">2</button>
            <button data-row="8" class="closen">2</button>
          </div>
          <div>
            <button data-row="1" class="closen">2</button>
            <button data-row="2" class="closen">2</button>
            <button data-row="3">2</button>
            <button data-row="4">2</button>
            <button data-row="5" class="closen">2</button>
            <button data-row="6">3</button>
            <button data-row="7">3</button>
            <button data-row="8" class="closen">3</button>
          </div>
          <div>
            <button data-row="1" class="closen">3</button>
            <button data-row="2">3</button>
            <button data-row="3">3</button>
            <button data-row="4" class="closen">3</button>
            <button data-row="5" class="closen">3</button>
            <button data-row="6">4</button>
            <button data-row="7">4</button>
            <button data-row="8">4</button>
          </div>
          <div>
            <button data-row="1" class="closen">4</button>
            <button data-row="2">4</button>
            <button data-row="3" class="closen">4</button>
            <button data-row="4">4</button>
            <button data-row="5">4</button>
            <button data-row="6">5</button>
            <button data-row="7" class="closen">5</button>
            <button data-row="8">5</button>
          </div>
          <div>
            <button data-row="1">5</button>
            <button data-row="2">5</button>
            <button data-row="3">5</button>
            <button data-row="4">5</button>
            <button data-row="5">5</button>
            <button data-row="6" class="closen">6</button>
            <button data-row="7" class="closen">6</button>
            <button data-row="8">6</button>
          </div>
          <div>
            <button data-row="1" class="closen">6</button>
            <button data-row="2" class="closen">6</button>
            <button data-row="3">6</button>
            <button data-row="4">6</button>
            <button data-row="5" class="closen">6</button>
            <button data-row="6" class="closen">7</button>
            <button data-row="7">7</button>
            <button data-row="8" class="closen">7</button>
          </div>
          <div>
            <button style="border-radius: 50%; width: 3vw; height: 3vw; margin-bottom: 0.3vw; margin-left: 0.3vw; cursor: not-allowed;"></button>
            <button data-row="2" class="closen">7</button>
            <button data-row="3" class="closen">7</button>
            <button data-row="4" class="closen">7</button>
            <button data-row="5">7</button>
            <button data-row="6" class="closen">8</button>
            <button data-row="7">8</button>
            <button data-row="8">8</button>
          </div>
          <div>
            <button data-row="1" style="border-radius: 50%; width: 3vw; height: 3vw; margin-bottom: 0.3vw; margin-left: 0.3vw; cursor: not-allowed;"></button>
            <button data-row="2" class="closen">8</button>
            <button data-row="3">8</button>
            <button data-row="4" class="closen">8</button>
            <button data-row="5">8</button>
            <button data-row="6">9</button>
            <button data-row="7" class="closen">9</button>
            <button data-row="8">9</button>
          </div>
          <div>
            <button style="border-radius: 50%; width: 3vw; height: 3vw; margin-bottom: 0.3vw; margin-left: 0.3vw; cursor: not-allowed;"></button>
            <button data-row="2">9</button>
            <button data-row="3">9</button>
            <button data-row="4" class="closen">9</button>
            <button data-row="5" class="closen">9</button>
            <button data-row="6">10</button>
            <button data-row="7">10</button>
            <button data-row="8">10</button>
          </div>
          <div>
            <button data-row="1">10</button>
            <button data-row="2">10</button>
            <button data-row="3" class="closen">10</button>
            <button data-row="4" class="closen">10</button>
            <button data-row="5" class="closen">10</button>
            <button data-row="6">11</button>
            <button data-row="7" class="closen">11</button>
            <button data-row="8">11</button>
          </div>
          <div>
            <button data-row="1">11</button>
            <button data-row="2">11</button>
            <button data-row="3" class="closen">11</button>
            <button data-row="4" class="closen">11</button>
            <button data-row="5">11</button>
            <button data-row="6" class="closen">12</button>
            <button data-row="7" class="closen">12</button>
            <button data-row="8">12</button>
          </div>
          <div>
            <button data-row="1">12</button>
            <button data-row="2">12</button>
            <button data-row="3" class="closen">12</button>
            <button data-row="4">12</button>
            <button data-row="5">12</button>
            <button data-row="6" class="closen">13</button>
            <button data-row="7" class="closen">13</button>
            <button data-row="8" class="closen">13</button>
          </div>
          <div>
            <button data-row="1">14</button>
            <button data-row="2">14</button>
            <button data-row="3" class="closen">14</button>
          </div>
        </div>
        <div class="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>
      <div class="sits-info">
        <div class="idk">
          <div class="standart"></div>
          <p>Стандартное</p>
        </div>
        <div class="idk">
          <div class="invalid"></div>
          <p>Для инвалидов</p>
        </div>
        <div class="idk">
          <div class="close"></div>
          <p>Занято</p>
        </div>
        <div class="idk">
          <div class="chosen"></div>
          <p>Выбранное вами</p>
        </div>
      </div>
    </div>
    <div class="chose"></div>
    <a class="continue-a"><button class="continue">ПРОДОЛЖИТЬ: <span>0</span> ₽</button></a>
`;

article.innerHTML = html;

const sitButton = document.querySelector('.actual-sits')
    .querySelectorAll('div');

const continueBtn = document.querySelector('.continue');

const price = document.querySelector('.continue')
    .querySelector('span');

const continueA = document.querySelector('.continue-a');

let tickets = [];
localStorage.setItem('tickets', JSON.stringify(tickets));

sitButton.forEach((value) => {
    const buttons = value.querySelectorAll("button");
    buttons.forEach((value) => {
        value.addEventListener('click', () => {
            if (value.className !== 'invalid' && value.className !== 'closen') {
                if (value.style.backgroundColor !== "transparent") {
                    value.style.background = "linear-gradient(135deg,#fbca47,#fbca47 50%,#f49f24)";
                    price.innerText = String(Number(price.innerText) + 500);
                    tickets.push([value.dataset.row, value.innerText]);
                    localStorage.setItem('tickets', JSON.stringify(tickets));
                } else {
                    value.style.background = "rgb(220, 220, 220)";
                    price.innerText = String(Number(price.innerText) - 500)
                    tickets = tickets.filter((element) =>
                        !(element[0] === value.dataset.row &&
                        element[1] === value.innerText));
                    localStorage.setItem('tickets', JSON.stringify(tickets));
                }
                if (price.innerText === "0") {
                    if (continueBtn.classList.contains('active')) {
                        continueBtn.classList.remove('active');
                    }
                    continueA.href = "";
                } else {
                    if (!continueBtn.classList.contains('active')) {
                        continueBtn.classList.add('active');
                    }
                    continueA.href = "email.html";
                }
            }
        });
    });
});