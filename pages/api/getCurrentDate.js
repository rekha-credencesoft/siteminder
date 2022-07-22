export default function handler(req, res) {
    let currentDate1 = new Date();
    let currentFilteredDate1 = currentDate1
  .toLocaleDateString()
  .split("/")
  .reverse();
  for (let index = 0; index < currentFilteredDate1.length; index++) {
    if (currentFilteredDate1[index] < 10) {
      currentFilteredDate1[index] = "0" + currentFilteredDate1[index];
    }
    // console.log(currentFilteredDate[index])
  }
  let currentDateToShow1 = currentFilteredDate1.join("-");
    res.status(200).json({ date: currentDateToShow1 })
  }