let changeMonth;
const cal_info = document.querySelector(".cal_info");
const calPrev = document.querySelector(".prev");
const calNext = document.querySelector(".next");

const renderCal = (date) => {
    changeMonth = date;
    const currYear = new Date(date).getFullYear();
    const currMonth = new Date(date).getMonth()+1;
    cal_info.innerText = `${currYear}년 ${currMonth}월`;

    const prevLastDay = new Date(currYear, currMonth -1, 0).getDay();
    const currLastDate = new Date(currYear, currMonth, 0).getDate();
    const currLastDay = new Date(currYear,currMonth,0).getDay();

    let htmls=''
    if (prevLastDay !== 6) {
        for(let i=0; i<= prevLastDay; i++) {
            htmls+=`<div class="nothing">x</div>`;
        }
    }
    for (let i=1;i<=currLastDate; i++){
        htmls+= `<div>${i}</div>`;
    }
    for(let i=currLastDay; i<6; i++) {
        htmls+= `<div class="nothing">x</div>`;
    }
    const calContent = document.querySelector(".cal_content");
    calContent.innerHTML = htmls;
}



const cDays = (direction) => {
    let cYear = changeMonth.getFullYear();
    let cMonth;
    if('prev' === direction) {
        if(changeMonth.getMonth()===0) {
            cYear = cYear -1;
            cMonth = 12;
        } else {
            cMonth = changeMonth.getMonth();
        }
    }
    if('next' === direction) {
        if(changeMonth.getMonth() === 11) {
            cYear = cYear + 1;
            cMonth = 1
        } else {
            cMonth = changeMonth.getMonth()+2;
        }
    }
    const temp = `${cYear}-${cMonth}-01`;
    renderCal(new Date(temp));

}
calPrev.addEventListener("click", () => cDays('prev'));
calNext.addEventListener("click", ()=> cDays('next'));


/*초깃값*/
const today = new Date();
renderCal(today);


