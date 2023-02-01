stats = document.querySelectorAll(".stats h3");
subStats = document.querySelectorAll(".stats span");
buttons = document.querySelectorAll("button");
let active = 0;
async function fetchData() {
  let response = await fetch("data.json");
  let data = await response.json();
  if (active == 0) {
    for (let i = 0; i < data.length; i++) {
      stats[i].textContent = `${data[i].timeframes.daily.current}hrs`;
      subStats[
        i
      ].textContent = `Last day - ${data[i].timeframes.daily.previous}hrs`;
    }
  } else if (active == 1) {
    for (let i = 0; i < data.length; i++) {
      stats[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
      subStats[
        i
      ].textContent = `Last day - ${data[i].timeframes.weekly.previous}hrs`;
    }
  } else if (active == 2) {
    for (let i = 0; i < data.length; i++) {
      stats[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
      subStats[
        i
      ].textContent = `Last day - ${data[i].timeframes.monthly.previous}hrs`;
    }
  }
}
function activateBtn(selectedIndex) {
  for (let i = 0; i < buttons.length; i++) {
    if (i === selectedIndex) {
      buttons[i].style.color = "#edecfc";
    } else {
      buttons[i].style.color = "hsl(235, 45%, 61%)";
    }
  }
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    active = i;
    activateBtn(i);
    fetchData();
  };
}
fetchData();
buttons[0].style.color = "#edecfc";
