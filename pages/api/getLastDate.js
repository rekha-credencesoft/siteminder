export default function handler(req, res) {
    let lastDate1 = new Date();
    let currentDate1 = new Date();
    lastDate1 = new Date(lastDate1.setDate(currentDate1.getDate() + 11));
    let lastFilteredDate1 = lastDate1.toLocaleDateString().split("/").reverse();
    for (let index = 0; index < lastFilteredDate1.length; index++) {
        if (lastFilteredDate1[index] < 10) {
          lastFilteredDate1[index] = "0" + lastFilteredDate1[index];
        }
        // console.log(currentFilteredDate[index])
      }
      let lastDateToShow1 = lastFilteredDate1.join("-");
    res.status(200).json({ date: lastDateToShow1 })
  }