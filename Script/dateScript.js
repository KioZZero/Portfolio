function getOrdinalSuffix(day) {
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function updateDate() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const suffix = getOrdinalSuffix(day);

  document.getElementById("actualDate").innerHTML = `${day}${suffix} of ${monthNames[month]} ${year}`;
}

window.onload = function() {
  updateDate();
  setInterval(updateDate, 60000);
};