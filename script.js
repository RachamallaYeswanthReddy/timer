const daysValue = document.querySelector('#days');
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
const countdownDateTime = new Date(2024,1,1,0,0,0).getTime();

function countDown()
{
    const dateTimeNow = new Date().getTime();
    let diff = countdownDateTime - dateTimeNow;

    const daysvalueNumber = Math.floor(diff/(1000*60*60*24));
    const hoursvalueNumber = Math.floor(diff/(1000*60*60)%24);
    const minutesValueNumber = Math.floor(diff/(1000*60)%60);
    const secondsValueNumber = Math.floor(diff/(1000)%60);
    daysValue.innerHTML = daysvalueNumber;
    hoursValue.innerHTML= hoursvalueNumber;
    minutesValue.innerHTML= minutesValueNumber;
    secondsValue.innerHTML= secondsValueNumber;
    console.log(daysvalueNumber,hoursvalueNumber,minutesValueNumber,secondsValueNumber);
}


setInterval(countDown, 1000);