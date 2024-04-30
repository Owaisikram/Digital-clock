// Get all of the output elements from the DOM
const timeOutput = document.querySelector('.time');
const secOutput = document.querySelector('.sec');
const ampmOutput = document.querySelector('.ampm');
const monthOutput = document.querySelector('.month');
const dayOfWeekOutput = document.querySelector(".dayofweek");
const dayOutput = document.querySelector('.day');

// Weekday Names
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Month Names
const monthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Add '0' if its a one digit number
function formatTime(val){
    if(val<10){
        return "0";
    }
    else{
        return "";
    }
}

function clock(){

    // Get the date
    const d = new Date();

    // Time variables
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // Output weekday name
    dayOfWeekOutput.innerHTML = weekday[
        d.getDay()
    ];

    // Output month name
    monthOutput.innerHTML = monthName[
        d.getMonth()
    ];

    // Output day
    dayOutput.innerHTML = d.getDate();

    // Formatting and displaying the time
    const time = formatTime(h)+h+":"+formatTime(m)+m;
    const sec = formatTime(s)+s;

    // Conditionally displaying the time format
    const ampm = h>=12? 'PM':'AM'; //conditional statement

	if(h > 12){
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s; 


    // Output the time
    timeOutput.innerHTML = time;
    secOutput.innerHTML = sec;
    ampmOutput.innerHTML = ampm;
}

// Updating the time every 0.1 second
setInterval(clock, 1000);