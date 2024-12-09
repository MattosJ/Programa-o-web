const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
console.log(date);

const month = date.getMonth();
monthName.innerHTML = date.toLocaleString("br",{
  month:"long"
})

const dayOFWeek = date.getDate();
dayName.innerHTML = date.toLocaleDateString("br",{
  weekday : "long"
})

dayNumber.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();