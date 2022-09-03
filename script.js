const months = [
  "ژانویه",
  "فوریه",
  "مارس",
  "آپریل",
  "می",
  "ژوئن",
  "جولای",
  "آگوست",
  "سپتامبر",
  "اکتبر",
  "نوامبر",
  "دسامبر",
];

const weekdays = [
  "یکشنه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

let giveaway = document.querySelector(".giveaway");
let deadline = document.querySelector(".deadline");
let items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 8, 13, 19, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `پایان جشنواره در ${weekday} ${date} ${month} ${year} ساعت ${hour}:${minute}`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  //    VAlues in MS
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMin);
  let seconds = Math.floor((time % oneMin) / 1000);

//   Set values to Array
const values = [days , hours , minutes , seconds]

function format(item) {
    if(item < 10) {
        return (item = `0${item}`)
    }
    return item
}

items.forEach((item , index) => {
    item.innerHTML = format(values[index])
});
if(time < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4>متاسفانه زمان پیش فروش به پایان رسیده</h4>`
}
}

let countdown = setInterval(getRemainingTime , 1000)
getRemainingTime();
