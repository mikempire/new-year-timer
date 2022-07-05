const $days = document.querySelector('#days');
const $hours = document.querySelector('#hours');
const $minutes = document.querySelector('#mins');
const $seconds = document.querySelector('#sec');


function leftTime() {
    const now = new Date();
    const futureDate = new Date('2023-01-01');
    let declOfNum = function (number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return `${number}<br><span>${titles[
            (number % 100 > 4 && number % 100 < 20)
                ? 2 :
                cases[(number % 10 < 5) ? number % 10 : 5]
            ]}</span>`;
    }

    let totalSecond = (futureDate - now) / 1000;

    let days = Math.floor(totalSecond / 3600 / 24); // 3600 секунд - это 60 минут(час)
    let hours = Math.floor(totalSecond / 3600) % 24;
    let minutes = Math.floor(totalSecond / 3600) % 60;
    let seconds = Math.floor(totalSecond) % 60;


    $days.innerHTML = declOfNum(days, ['день', 'дня', 'дней']);
    $hours.innerHTML = declOfNum(hours, ['час', 'часа', 'часов']);
    $minutes.innerHTML = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.innerHTML = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
}


function createSnow() {
    let div = document.createElement('div');
    div.innerHTML = '&#10052';
    div.classList.add('snow');

    div.style.left = (Math.random() * 100).toFixed(0) + 'vw';
    div.style.animationDuration = Math.random() * 2 + 10 + 's';
    document.querySelector("body").appendChild(div);

    div.addEventListener('click', function () {
        this.innerHTML = '&#128167';
    })
}

setInterval(createSnow, 1000);

leftTime();
setInterval(leftTime, 1000)

