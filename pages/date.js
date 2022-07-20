let currentDate = new Date();
let lastDate =  new Date();
lastDate = new Date(lastDate.setDate(currentDate.getDate() + 10));
let currentFilteredDate = currentDate
  .toLocaleDateString()
  .split("/")
  .reverse();
let lastFilteredDate = lastDate.toLocaleDateString().split("/").reverse();
for (let index = 0; index < currentFilteredDate.length; index++) {
  if (currentFilteredDate[index] < 10) {
    currentFilteredDate[index] = "0" + currentFilteredDate[index];
  }
  // console.log(currentFilteredDate[index])
}
for (let index = 0; index < lastFilteredDate.length; index++) {
  if (lastFilteredDate[index] < 10) {
    lastFilteredDate[index] = "0" + lastFilteredDate[index];
  }
  // console.log(currentFilteredDate[index])
}
let currentDateToShow = currentFilteredDate.join("-");
let lastDateToShow = lastFilteredDate.join("-");

export {currentDateToShow, lastDateToShow};