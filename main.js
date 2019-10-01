// Selecting DOM elements to manipulate
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");
//Function to show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    seconds = today.getSeconds();

  //Set AM or PM
  const amOrPm = hour >= 12 ? "PM" : "AM";

  //Format to 12 hours
  hour = hour % 12 || 12;
  console.log(time);
  //Outputting time
  time.innerHTML = `${hour} <span>:</span> ${min} <span>:</span> ${seconds}`;

  setTimeout(showTime, 1000);
}

//Run
showTime();
