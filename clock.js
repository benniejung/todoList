const todayDate = document.querySelector("#todayDate");
const clock = document.querySelector("#clock");

function getClock() {
    const today = new Date();
    todayDate.innerText = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`;
    clock.innerText = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);