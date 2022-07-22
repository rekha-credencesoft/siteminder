let currentDate1 = new Date();
let lastDate1 = new Date();
lastDate1 = new Date(lastDate1.setDate(currentDate1.getDate() + 11));
let currentFilteredDate1 = currentDate1
  .toLocaleDateString()
  .split("/")
  .reverse();
let lastFilteredDate1 = lastDate1.toLocaleDateString().split("/").reverse();
for (let index = 0; index < currentFilteredDate1.length; index++) {
  if (currentFilteredDate1[index] < 10) {
    currentFilteredDate1[index] = "0" + currentFilteredDate1[index];
  }
  // console.log(currentFilteredDate[index])
}
for (let index = 0; index < lastFilteredDate1.length; index++) {
  if (lastFilteredDate1[index] < 10) {
    lastFilteredDate1[index] = "0" + lastFilteredDate1[index];
  }
  // console.log(currentFilteredDate[index])
}
let currentDateToShow1 = currentFilteredDate1.join("-");
let lastDateToShow1 = lastFilteredDate1.join("-");
// console.log(lastDateToShow1)
// console.log(currentDateToShow1)
export {currentDateToShow1, lastDateToShow1}