import React from "react";
import styles from "../../styles/Home.module.css";
import { BsBasket3, BsInfoCircle } from "react-icons/bs";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { FaCaretSquareRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { AiFillCopyrightCircle, AiFillCaretDown } from "react-icons/ai";
import { Router, useRouter } from "next/router";
import { currentDateToShow1, lastDateToShow1 } from "../../public/dates";

//   let currentDate1 = new Date();
// let lastDate1 = new Date();
// lastDate1 = new Date(lastDate1.setDate(currentDate1.getDate() + 11));
// let currentFilteredDate1 = currentDate1
//   .toLocaleDateString()
//   .split("/")
//   .reverse();
// let lastFilteredDate1 = lastDate1.toLocaleDateString().split("/").reverse();
// for (let index = 0; index < currentFilteredDate1.length; index++) {
//   if (currentFilteredDate1[index] < 10) {
//     currentFilteredDate1[index] = "0" + currentFilteredDate1[index];
//   }
//   // console.log(currentFilteredDate[index])
// }
// for (let index = 0; index < lastFilteredDate1.length; index++) {
//   if (lastFilteredDate1[index] < 10) {
//     lastFilteredDate1[index] = "0" + lastFilteredDate1[index];
//   }
//   // console.log(currentFilteredDate[index])
// }
// let currentDateToShow1 = currentFilteredDate1.join("-");
// let lastDateToShow1 = lastFilteredDate1.join("-");
// // console.log(lastDateToShow1)
// // console.log(currentDateToShow1)

const Home = ({ oldProperties, oldRoomsArray, oldProperty, propertyId }) => {
  const [increment, setIncrement] = useState(0);
  const [properties, setProperties] = useState(oldProperties);
  const [modal, setModal] = useState({ state: false, id: -1, row: -1 });
  const [modalShow, setModalShow] = React.useState(false);
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(10);
  const [property, setProperty] = useState(oldProperty);
  const [roomsArray, setRoomsArray] = useState(oldRoomsArray);
  const [incrementDate, setIncrementDate] = useState(20);



  if (oldRoomsArray?.length) {
    oldRoomsArray[0].splice(10, oldRoomsArray[0].length)
  }
  // console.log(roomsArray)
  // console.log(oldProperty)
  // const [progress, setProgress] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState({
    planName: "",
    planId: "",
  });
  const roomTypes = [];
  let room = [];
  let roomDetail = [];
  const showModal = (state, id, row) => {
    setModal({
      state: state,
      id: id,
      row: row,
    });
  };

  const [shopModal, setshopModal] = useState({ state: false, id: -1, row: -1 });


  const handleShopModal1 = (state, row) => {
    if (state == true) {
      setshopModal({ state: false, row: -1 });
    } else {
      setshopModal({ state: true, row: row });
    }
  };

  //This loop will extract the name of property and will make it as a key of its data
  for (let index = 0; index < properties.length; index++) {
    if (!roomTypes[properties[index].name]) {
      roomTypes[properties[index].name] = JSON.parse(
        JSON.stringify(properties[index])
      );
    }
  }
  delete roomTypes["Official  Use"];
  // console.log(roomTypes)

  let currentDate = new Date();
  currentDate = new Date();
  let lastDate = new Date();
  lastDate = new Date(lastDate.setDate(currentDate.getDate() + incrementDate));
  let currentFilteredDate = currentDate
    .toLocaleDateString()
    .split("/")
    .reverse();
  let lastFilteredDate = lastDate.toLocaleDateString().split("/").reverse();
  [currentFilteredDate[1], currentFilteredDate[2]] = [
    currentFilteredDate[2],
    currentFilteredDate[1],
  ];
  [lastFilteredDate[1], lastFilteredDate[2]] = [
    lastFilteredDate[2],
    lastFilteredDate[1],
  ];
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
  //   console.log(lastDateToShow)
  //   console.log(currentDateToShow)
  //   console.log(currentFilteredDate)
  //   console.log(lastFilteredDate)

  //237
  let roomsData = [];
  let roomsNamesWithData = {};
  for (let index = 0; index < Object.keys(roomTypes).length; index++) {
    if (!roomsData[Object.keys(roomTypes)[index]]) {
      Object.keys(roomTypes)[index] = [];
      // obj[Object.keys(roomTypes)[index]] = [];
      roomsData.push(Object.keys(roomTypes)[index]);
    }
  }
  // console.log(roomsData)
  // console.log(roomsNamesWithData)
  //This function will Decrement Seven Days
  const newPropertyAndRoomsResponseFunc = async () => {
    // setProgress(50);
    const newPropertyResponse = await fetch(
      "https://api.bookonelocal.in/api-bookone/api/availability/getRatesAndAvailabilityForPropertyByDate",
      {
        method: "POST",
        body: JSON.stringify({
          fromDate: currentDateToShow,
          // "fromDate": `${startDate.year}-${startDate.month<10?'0'+startDate.month:startDate.month}-${startDate.date<10?'0'+startDate.date:startDate.date}`,
          propertyId: propertyId,
          toDate: lastDateToShow,
          // "toDate": `${lastDate.year}-${lastDate.month<10?'0'+lastDate.month:lastDate.month}-${lastDate.date<10?'0'+lastDate.date:lastDate.date}`
        }),
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY2MTc3MDQ0NCwiZXhwIjoxNjYyMjAyNDQ0fQ.NRXtZudUnLIGr6obtDwywLK4mwvvFwPFb0VN6mydcWk",
          "Content-Type": "application/json",
          APP_ID: "BOOKONE_WEB_APP",
        },
      }
    );
    const newProperty = await newPropertyResponse.json();
    setProperty(newProperty);
    const newRoomsArray = [];
    for (let index = 0; index < properties.length; index++) {
      const newRoomsResponse = await fetch(
        `https://api.bookonelocal.in/api-bookone/api/availability/getRatesAndAvailabilityForRoomByDate`,
        {
          method: "POST",
          body: JSON.stringify({
            // "fromDate": `${startDate.year}-${startDate.month<10?'0'+startDate.month:startDate.month}-${startDate.date<10?'0'+startDate.date:startDate.date}`,
            fromDate: currentDateToShow,
            propertyId: propertyId,
            roomId: properties[index].id,
            toDate: lastDateToShow,
          }),
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY2MTc3MDQ0NCwiZXhwIjoxNjYyMjAyNDQ0fQ.NRXtZudUnLIGr6obtDwywLK4mwvvFwPFb0VN6mydcWk",
            "Content-Type": "application/json",
            APP_ID: "BOOKONE_WEB_APP",
          },
        }
      );
      const newRooms = await newRoomsResponse.json();
      newRoomsArray.push(newRooms);
    }
    setRoomsArray(newRoomsArray);
    // setProgress(100);
  };
  // console.log(roomsArray)


  for (let i = 0; i < roomsArray.length; i++) {
    let room = roomsArray[i];
    for (let j = 0; j < room.length; j++) {
      //  room[j]['hie'] = 'hie'
      for (let k = 0; k < properties.length; k++) {
        if (properties[k].name == room[j].roomName) {
          room[j]["roomDetail"] = properties[k];
        }
        // console.log(properties[k])
      }
    }
    // console.log(roomsArray[0])
    // console.log(room)
    for (let l = 0; l < room.length; l++) {
      // console.log(room[l].roomName)
      if (room[l].roomName == roomsData[l]) {
        // console.log(roomsData[l])
        roomsNamesWithData[roomsData[l]] = room;
        // roomsData[l] = rooms
      }
    }
    // room = [];
  }
  // console.log(roomsNamesWithData)

  //This will fetch The room Rate Plans of each room in their particular room keys
  // console.log(roomsData[0][0].roomRatePlans)
  let roomsPlansToShow = [];
  let roomsPlansNames = {};
  for (
    let index = 0;
    index < Object.values(roomsNamesWithData).length;
    index++
  ) {
    // console.log(Object.values(roomsNamesWithData)[index]);
    // console.log(Object.keys(roomsNamesWithData)[index]);
    // let roomData = roomsData[index];
    for (
      let jindex = 0;
      jindex < Object.values(roomsNamesWithData)[index].length;
      jindex++
    ) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex]);
      if (!roomsPlansNames[Object.keys(roomsNamesWithData)[index]]) {
        roomsPlansNames[Object.keys(roomsNamesWithData)[index]] = [];
        roomsPlansNames[Object.keys(roomsNamesWithData)[index]].push(
          Object.values(roomsNamesWithData)[index][jindex].roomRatePlans
        );
      } else {
        roomsPlansNames[Object.keys(roomsNamesWithData)[index]].push(
          Object.values(roomsNamesWithData)[index][jindex].roomRatePlans
        );
      }
    }
  }
  // console.log(roomsData)
  // console.log(roomsPlansNames)



  // let roomsPlansToShowNew = {};
  // // console.log(Object.keys(roomsPlansNames))
  // for (let index = 0; index < Object.values(roomsPlansNames).length; index++) {
  //   // console.log(Object.keys(roomsPlansNames)[index])
  //   if (!roomsPlansToShowNew[Object.keys(roomsPlansNames)[index]]) {
  //     roomsPlansToShowNew[Object.keys(roomsPlansNames)[index]] = []
  //     for (let jindex = 0; jindex < Object.values(roomsPlansNames)[index].length; jindex++) {
  //       // console.log(Object.values(roomsPlansNames)[index][jindex])
  //       // console.log(Object.values(roomsPlansNames)[index][jindex])
  //       if(Object.values(roomsPlansNames)[index][jindex].length == 0){
  //         // console.log(Object.values(roomsPlansNames)[index][jindex].name)
  //         roomsPlansToShowNew[Object.keys(roomsPlansNames)[index]].push({name: 'No Plan'})
  //       }
  //       else{
  //         for (let zindex = 0; zindex < Object.values(roomsPlansNames)[index][jindex].length; zindex++) {
  //           // console.log(Object.values(roomsPlansNames)[index][jindex][zindex])
  //           roomsPlansToShowNew[Object.keys(roomsPlansNames)[index]].push(Object.values(roomsPlansNames)[index][jindex][zindex])

  //         }
  //       }

  //     }
  //   }

  // }

  // console.log(roomsPlansToShowNew)

  //Fetching room rate plans
  for (let index = 0; index < Object.values(roomsPlansNames).length; index++) {
    // console.log(Object.values(roomsPlansNames)[index]);
    for (
      let jindex = 0;
      jindex < Object.values(roomsPlansNames)[index].length;
      jindex++
    ) {
      // console.log(Object.values(roomsPlansNames)[index][jindex]);
      if (Object.values(roomsPlansNames)[index][jindex].length == 0) {
        // console.log(Object.values(roomsPlansNames)[index][jindex]);
      }
      for (
        let zindex = 0;
        zindex < Object.values(roomsPlansNames)[index][jindex].length;
        zindex++
      ) {
        // console.log(Object.values(roomsPlansNames)[index][jindex][zindex]);
        if (
          !roomsPlansToShow[
          Object.values(roomsPlansNames)[index][jindex][zindex].name
          ]
        ) {
          roomsPlansToShow[
            Object.values(roomsPlansNames)[index][jindex][zindex].name
          ] = [];
          roomsPlansToShow[
            Object.values(roomsPlansNames)[index][jindex][zindex].name
          ].push(Object.values(roomsPlansNames)[index][jindex][zindex]);
        } else {
          roomsPlansToShow[
            Object.values(roomsPlansNames)[index][jindex][zindex].name
          ].push(Object.values(roomsPlansNames)[index][jindex][zindex]);
        }
      }
    }
  }
  // console.log(roomsPlansToShow)

  for (let index = 0; index < Object.keys(roomsPlansToShow).length; index++) {
    // console.log(Object.values(roomsPlansToShow)[index][0])
    // console.log(Object.keys(roomsPlansToShow)[index])
    if (roomsPlansToShow[Object.keys(roomsPlansToShow)[index]]) {
      // console.log(Object.values(roomsPlansToShow)[index].length)
      if (roomsPlansToShow[Object.keys(roomsPlansToShow)[index]].length < count) {
        // roomsPlansToShow[Object.keys(roomsPlansToShow)[index]]
        // console.log(roomsPlansToShow[Object.keys(roomsPlansToShow)[index]])
        // console.log(Object.values(roomsPlansToShow)[index])
        // let newRoom = roomsArray[i]
        // let newRoom = roomsArray[i]
        // for (let zindex = 0; zindex < Object.keys(roomsNamesWithData).length; zindex++) {
        //   // console.log(roomsArray[zindex][0])
        //   if(!newRoom.includes(roomsArray[zindex][0])) {
        //     newRoom.push(roomsArray[zindex][0])
        //   }
        // }
        for (let jindex = roomsPlansToShow[Object.keys(roomsPlansToShow)[index]].length; jindex < count; jindex++) {
          roomsPlansToShow[Object.keys(roomsPlansToShow)[index]].push({ name: Object.keys(roomsPlansToShow)[index], amount: 0, roomId: Object.values(roomsPlansToShow)[index][0].roomId })

        }
      }
    }

  }

  // console.log(newRoom)
  // console.log(roomsPlansToShow)

  let roomPlansToShowTrial = [];
  for (
    let index = 0;
    index < Object.values(roomsNamesWithData).length;
    index++
  ) {
    // console.log(Object.values(roomsNamesWithData)[index])
    // console.log(Object.keys(roomsNamesWithData)[index])
    for (
      let jindex = 0;
      jindex < Object.values(roomsNamesWithData)[index].length;
      jindex++
    ) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex].roomId)
      // console.log(Object.values(roomsNamesWithData)[index][jindex])
      for (
        let zindex = 0;
        zindex < Object.values(roomsPlansToShow).length;
        zindex++
      ) {
        // console.log(Object.values(roomsPlansToShow)[zindex])
        for (
          let ndex = 0;
          ndex < Object.values(roomsPlansToShow)[zindex].length;
          ndex++
        ) {
          // console.log(Object.values(roomsPlansToShow)[zindex][ndex].roomId)
          // console.log(Object.values(roomsPlansToShow)[zindex][ndex].name)
          if (
            !roomPlansToShowTrial[
            Object.values(roomsNamesWithData)[index][jindex].roomName
            ]
          ) {
            roomPlansToShowTrial[
              Object.values(roomsNamesWithData)[index][jindex].roomName
            ] = [];
            if (
              !roomPlansToShowTrial[
              Object.values(roomsNamesWithData)[index][jindex].roomName
              ][Object.values(roomsPlansToShow)[zindex][ndex].name] &&
              Object.values(roomsNamesWithData)[index][jindex].roomId ==
              Object.values(roomsPlansToShow)[zindex][ndex].roomId
            ) {
              roomPlansToShowTrial[
                Object.values(roomsNamesWithData)[index][jindex].roomName
              ][Object.values(roomsPlansToShow)[zindex][ndex].name] = [];
              if (
                !roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                )
              ) {
                roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].push(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                );
              }
            } else if (
              Object.values(roomsNamesWithData)[index][jindex].roomId ==
              Object.values(roomsPlansToShow)[zindex][ndex].roomId
            ) {
              if (
                !roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                )
              ) {
                roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].push(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                );
              }
            }
          } else {
            if (
              !roomPlansToShowTrial[
              Object.values(roomsNamesWithData)[index][jindex].roomName
              ][Object.values(roomsPlansToShow)[zindex][ndex].name] &&
              Object.values(roomsNamesWithData)[index][jindex].roomId ==
              Object.values(roomsPlansToShow)[zindex][ndex].roomId
            ) {
              roomPlansToShowTrial[
                Object.values(roomsNamesWithData)[index][jindex].roomName
              ][Object.values(roomsPlansToShow)[zindex][ndex].name] = [];
              if (
                !roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                )
              ) {
                roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].push(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                );
              }
            } else if (
              Object.values(roomsNamesWithData)[index][jindex].roomId ==
              Object.values(roomsPlansToShow)[zindex][ndex].roomId
            ) {
              if (
                !roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                )
              ) {
                roomPlansToShowTrial[
                  Object.values(roomsNamesWithData)[index][jindex].roomName
                ][Object.values(roomsPlansToShow)[zindex][ndex].name].push(
                  Object.values(roomsPlansToShow)[zindex][ndex]
                );
              }
            }
          }
        }
      }
    }
  }
  // oldRoomPlansToShowTrial.slice(0,7)
  // console.log(roomPlansToShowTrial)
  // let roomPlansToShowTrial = [];
  // for (let index = 0; index < Object.values(oldRoomPlansToShowTrial).length; index++) {
  //   // console.log(Object.keys(roomPlansToShowTrial)[index])
  //   // console.log(Object.values(Object.values(roomPlansToShowTrial)[index])[0])
  //   if (!roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]]) {
  //     roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]] = [];
  //     for (let jindex = 0; jindex < Object.keys(Object.values(oldRoomPlansToShowTrial)[index]).length; jindex++) {
  //       // console.log(Object.values(Object.values(roomPlansToShowTrial)[index])[jindex])
  //       roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]][Object.keys(Object.values(oldRoomPlansToShowTrial)[index])[jindex]] = [];
  //       for (let zindex = 0; zindex < 10; zindex++) {
  //         // console.log(Object.values(Object.values(roomPlansToShowTrial)[index])[jindex][zindex])
  //         if(Object.values(Object.values(oldRoomPlansToShowTrial)[index])[jindex][zindex] == undefined){
  //           roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]][Object.keys(Object.values(oldRoomPlansToShowTrial)[index])[jindex]].push({amount: 0})
  //         }
  //         else{
  //           roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]][Object.keys(Object.values(oldRoomPlansToShowTrial)[index])[jindex]].push(Object.values(Object.values(oldRoomPlansToShowTrial)[index])[jindex][zindex])
  //         }

  //       }
  //     }
  //   }
  //   else{
  //     for (let jindex = 0; jindex < Object.keys(Object.values(oldRoomPlansToShowTrial)[index]).length; jindex++) {
  //       // console.log(Object.values(Object.values(roomPlansToShowTrial)[index])[jindex])
  //       roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]][Object.keys(Object.values(oldRoomPlansToShowTrial)[index])[jindex]] = [];
  //       for (let zindex = 0; zindex < count; zindex++) {
  //         // console.log(Object.values(Object.values(roomPlansToShowTrial)[index])[jindex][zindex])
  //         if(Object.values(Object.values(oldRoomPlansToShowTrial)[index])[jindex][zindex] == undefined){
  //           roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]][Object.keys(Object.values(oldRoomPlansToShowTrial)[index])[jindex]].push({amount: 0})
  //         }
  //         else{
  //           roomPlansToShowTrial[Object.keys(oldRoomPlansToShowTrial)[index]][Object.keys(Object.values(oldRoomPlansToShowTrial)[index])[jindex]].push(Object.values(Object.values(oldRoomPlansToShowTrial)[index])[jindex][zindex])
  //         }

  //       }
  //     }
  //   }

  // }

  // console.log(roomPlansToShowTrial)

  let fullRoomDeatils = [];
  for (
    let index = 0;
    index < Object.values(roomsNamesWithData).length;
    index++
  ) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (
      let jindex = 0;
      jindex < Object.values(roomPlansToShowTrial).length;
      jindex++
    ) {
      // console.log(Object.values(roomPlansToShowTrial)[jindex])
      if (
        Object.keys(roomsNamesWithData)[index] ==
        Object.keys(roomPlansToShowTrial)[jindex]
      ) {
        fullRoomDeatils[Object.keys(roomsNamesWithData)[index]] = {
          Details: Object.values(roomsNamesWithData)[index],
          Plans: Object.values(roomPlansToShowTrial)[jindex],
        };
      }
    }
  }
  // console.log(fullRoomDeatils);
  //Function to find out last date of the month
  const lastday = function (y, m) {
    return new Date(y, m + 1, 0);
  };
  // console.log(lastday(2022,6));
  // console.log(currentDate)
  //This will create an Array of Dates in a Month
  function dateRange(startDate, endDate, steps = 1) {
    const dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate).toDateString());
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray;
  }
  const date = new Date();
  let monthToShow = [];
  let datesToShow = [];
  let daysToShow = [];
  const dates = dateRange(date, lastday(2023, 6));
  // console.log(dates)
  for (let index = 0; index < dates.length; index++) {
    let day = new Date(dates[index]).getDay();
    let month = new Date(dates[index]).getMonth();
    let date = new Date(dates[index]).getDate();
    switch (day) {
      case 0:
        daysToShow.push("Sun");
        break;
      case 1:
        daysToShow.push("Mon");
        break;
      case 2:
        daysToShow.push("Tue");
        break;
      case 3:
        daysToShow.push("Wed");
        break;
      case 4:
        daysToShow.push("Thu");
        break;
      case 5:
        daysToShow.push("Fri");
        break;
      case 6:
        daysToShow.push("Sat");
    }
    switch (month) {
      case 0:
        monthToShow.push("Jan");
        break;
      case 1:
        monthToShow.push("Feb");
        break;
      case 2:
        monthToShow.push("Mar");
        break;
      case 3:
        monthToShow.push("Apr");
        break;
      case 4:
        monthToShow.push("May");
        break;
      case 5:
        monthToShow.push("Jun");
        break;
      case 6:
        monthToShow.push("Jul");
        break;
      case 7:
        monthToShow.push("Aug");
        break;
      case 8:
        monthToShow.push("Sep");
        break;
      case 9:
        monthToShow.push("Oct");
        break;
      case 10:
        monthToShow.push("Nov");
        break;
      case 11:
        monthToShow.push("Dec");
    }
    switch (date) {
      case 0:
        datesToShow.push(0);
        break;
      case 1:
        datesToShow.push(1);
        break;
      case 2:
        datesToShow.push(2);
        break;
      case 3:
        datesToShow.push(3);
        break;
      case 4:
        datesToShow.push(4);
        break;
      case 5:
        datesToShow.push(5);
        break;
      case 6:
        datesToShow.push(6);
        break;
      case 7:
        datesToShow.push(7);
        break;
      case 8:
        datesToShow.push(8);
        break;
      case 9:
        datesToShow.push(9);
        break;
      case 10:
        datesToShow.push(10);
        break;
      case 11:
        datesToShow.push(11);
        break;
      case 12:
        datesToShow.push(12);
        break;
      case 13:
        datesToShow.push(13);
        break;
      case 14:
        datesToShow.push(14);
        break;
      case 15:
        datesToShow.push(15);
        break;
      case 16:
        datesToShow.push(16);
        break;
      case 17:
        datesToShow.push(17);
        break;
      case 18:
        datesToShow.push(18);
        break;
      case 19:
        datesToShow.push(19);
        break;
      case 20:
        datesToShow.push(20);
        break;
      case 21:
        datesToShow.push(21);
        break;
      case 22:
        datesToShow.push(22);
        break;
      case 23:
        datesToShow.push(23);
        break;
      case 24:
        datesToShow.push(24);
        break;
      case 25:
        datesToShow.push(25);
        break;
      case 26:
        datesToShow.push(26);
        break;
      case 27:
        datesToShow.push(27);
        break;
      case 28:
        datesToShow.push(28);
        break;
      case 29:
        datesToShow.push(29);
        break;
      case 30:
        datesToShow.push(30);
        break;
      case 31:
        datesToShow.push(31);
        break;
    }
  }
  // console.log(dates.length)
  // console.log(increment)
  //This function will Increement Seven Days
  const tenDayIncrement = () => {
    // setProgress(30);
    if (increment < dates.length - 10) {
      setCount(count + 10)
      newPropertyAndRoomsResponseFunc();
      setIncrement(increment + 10);
      setIncrementDate(incrementDate + 10);
    }
  };
  const tenDayDecrement = () => {
    if (increment !== 0) {
    // window.location.reload();
      setCount(count - 10)
      setIncrement(increment - 10);
      setIncrementDate(incrementDate - 10);
    }
  };
  // console.log(property)
  //This will Decrement Days by Fourteen
  const fourteenDaysDecrement = () => {
    if (increment == 7) {
      setIncrement(0);
    } else if (increment !== 0) {
      setIncrement(increment - 14);
    }
  };
  //This will Increment Days by Fourteen
  const fourteenDaysIncrement = () => {
    setIncrement(increment + 14);
  };
  //This will refresh dates
  const refreshDates = () => {
    setIncrement(0);
  };
  //To Show Single Image of room Types
  let imageObj = {};
  for (
    let index = 0;
    index < Object.values(roomsNamesWithData).length;
    index++
  ) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (
      let jindex = 0;
      jindex < Object.values(roomsNamesWithData)[index].length;
      jindex++
    ) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex])
      for (
        let ndex = 0;
        ndex <
        Object.values(roomsNamesWithData)[index][jindex].roomDetail.imageList
          .length;
        ndex++
      ) {
        // console.log(Object.values(roomsNamesWithData)[index][jindex].roomDetail.imageList[0])
        if (!imageObj[Object.keys(roomsNamesWithData)[index]]) {
          imageObj[Object.keys(roomsNamesWithData)[index]] =
            Object.values(roomsNamesWithData)[index][
              jindex
            ].roomDetail.imageList;
        }
      }
    }
  }
  // console.log(Object.values(imageObj))
  // console.log(imageObj)
  datesToShow = datesToShow.slice(increment, increment + 10);
  daysToShow = daysToShow.slice(increment, increment + 10);
  monthToShow = monthToShow.slice(increment, increment + 10);
  // console.log(monthToShow)
  // console.log(monthToShow)
  // console.log(datesToShow);

  let priceArray = [];
  for (
    let index = 0;
    index < Object.values(roomsNamesWithData).length;
    index++
  ) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (let jindex = 0; jindex < dates.length; jindex++) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex])
      if (!priceArray[Object.keys(roomsNamesWithData)[index]]) {
        priceArray[Object.keys(roomsNamesWithData)[index]] = [];
        priceArray[Object.keys(roomsNamesWithData)[index]].push(
          Object.values(roomsNamesWithData)[index][jindex].price
        );
        if (Object.values(roomsNamesWithData)[index][jindex] == undefined) {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(0);
        }
      } else {
        if (Object.values(roomsNamesWithData)[index][jindex] == undefined) {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(0);
        } else {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(
            Object.values(roomsNamesWithData)[index][jindex].price
          );
        }
      }
    }
  }
  // console.log(priceArray)
  let pricesToShow = [];
  for (let index = 0; index < Object.values(priceArray).length; index++) {
    // console.log(Object.values(priceArray)[index])
    if (!pricesToShow[Object.keys(priceArray)[index]]) {
      pricesToShow[Object.keys(priceArray)[index]] = Object.values(priceArray)[
        index
      ].slice(increment, increment + 10);
    }
  }
  // console.log(pricesToShow)
  // console.log(roomsNamesWithData)
  // console.log("This is room Plans TO show trial" ,roomPlansToShowTrial)
  let plansToShow = [];
  for (
    let index = 0;
    index < Object.keys(roomPlansToShowTrial).length;
    index++
  ) {
    // console.log(Object.keys(roomPlansToShowTrial)[index])
    if (!plansToShow[Object.keys(roomPlansToShowTrial)[index]]) {
      plansToShow[Object.keys(roomPlansToShowTrial)[index]] = [];
    }
    for (
      let jindex = 0;
      jindex < Object.keys(Object.values(roomPlansToShowTrial)[index]).length;
      jindex++
    ) {
      // console.log(Object.values(Object.values(roomPlansToShowTrial)[index])[jindex])
      if (
        !plansToShow[Object.keys(roomPlansToShowTrial)[index]][
        Object.keys(Object.values(roomPlansToShowTrial)[index])[jindex]
        ]
      ) {
        plansToShow[Object.keys(roomPlansToShowTrial)[index]][
          Object.keys(Object.values(roomPlansToShowTrial)[index])[jindex]
        ] = {};
        plansToShow[Object.keys(roomPlansToShowTrial)[index]][
          Object.keys(Object.values(roomPlansToShowTrial)[index])[jindex]
        ] = Object.values(Object.values(roomPlansToShowTrial)[index])[
          jindex
        ].slice(increment, increment + 10);
      }
    }
  }
  // console.log('This is plans To Show' ,plansToShow)

  //For Getting the Available, Hold, Booked and Total value of Rooms
  let roomsInfo = {};
  let fullRoomInfo = [];
  for (
    let index = 0;
    index < Object.values(roomsNamesWithData).length;
    index++
  ) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (
      let jindex = 0;
      jindex < Object.values(roomsNamesWithData)[index].length;
      jindex++
    ) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex]
      if (!roomsInfo[Object.keys(roomsNamesWithData)[index]]) {
        roomsInfo[Object.keys(roomsNamesWithData)[index]] = {
          noOfAvailable: "",
          totalNoRooms: "",
          noOfBooked: "",
          noOfOnHold: "",
        };
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfAvailable =
          Object.values(roomsNamesWithData)[index][jindex].noOfAvailable;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].totalNoRooms =
          Object.values(roomsNamesWithData)[index][jindex].totalNoRooms;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfBooked =
          Object.values(roomsNamesWithData)[index][jindex].noOfBooked;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfOnHold =
          Object.values(roomsNamesWithData)[index][jindex].noOfOnHold;
      } else {
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfAvailable =
          roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfAvailable +
          Object.values(roomsNamesWithData)[index][jindex].noOfAvailable;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].totalNoRooms =
          roomsInfo[Object.keys(roomsNamesWithData)[index]].totalNoRooms +
          Object.values(roomsNamesWithData)[index][jindex].totalNoRooms;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfBooked =
          roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfBooked +
          Object.values(roomsNamesWithData)[index][jindex].noOfBooked;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfOnHold =
          roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfOnHold +
          Object.values(roomsNamesWithData)[index][jindex].noOfOnHold;
      }
    }
  }
  // console.log(roomsInfo);
  // console.log(fullRoomInfo)
  // console.log(plansToShow)

  return (
    <>
      {roomsNamesWithData && <div className={styles.bigContainer}>
        <div className={styles.topContainer}>
          <Row className={styles.upperRow}>
            <Col className={styles.firstOuterColumn}>
              <Col className={styles.leftArrow}>
                <MdArrowLeft onClick={tenDayDecrement} />
              </Col>
            </Col>
            <Col className={styles.secondOuterColumn}>
              {datesToShow.map((val, i) => {
                return (
                  <Col className={styles.columnDate} key={i}>
                    <div className={styles.spanContainer}>
                      <span>{daysToShow[i]}</span>
                      <span>{val}</span>
                      <span>{monthToShow[i]}</span>
                    </div>
                  </Col>
                );
              })}
              <Col className={styles.rightArrow}>
                <MdArrowRight onClick={tenDayIncrement} />
              </Col>
            </Col>
          </Row>
          {Object.keys(roomsNamesWithData).map((val, i) => {
            return (
              <>
                <Row className={styles.row} key={i}>
                  <Col className={styles.firstOuterColumn}>
                    <Col className={styles.leftArrow2}>
                      <Col className={styles.col1}>
                        {val == Object.keys(imageObj)[i] ? (
                          <img
                            key={i + 1}
                            src={Object.values(imageObj)[i][0].url}
                            alt=""
                            className={styles.image}
                          />
                        ) : (
                          <img
                            key={i + 1}
                            src="https://tse2.explicit.bing.net/th?id=OIP.38eE6cQfShw5U-lGbkcMCgHaEo&pid=Api&P=0&w=250&h=156"
                            alt=""
                            className={styles.image}
                          />
                        )}
                      </Col>
                      <Col className={styles.col2}>
                        <span className={styles.text}>{val}</span>
                        <span className={styles.text}>
                          <span
                            className={styles.moreInfo}
                            onClick={() => {
                              setModalShow(true),
                                setDetails({
                                  name: Object.keys(roomTypes)[i],
                                  facilities:
                                    Object.values(roomTypes)[i].roomFacilities,
                                  images: Object.values(imageObj)[i],
                                  plans: Object.keys(
                                    Object.values(roomPlansToShowTrial)[i]
                                  ),
                                });
                            }}
                          >
                            More Info
                          </span>
                          {val == Object.keys(roomTypes)[i] ? (
                            <MyVerticallyCenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              name={details.name}
                              facilities={details.facilities}
                              images={details.images}
                              plans={details.plans}
                            />
                          ) : (
                            ""
                          )}
                        </span>
                      </Col>
                      <Col className={styles.col3}>
                        <span
                          style={{
                            border: "1px solid #9acc54",
                            color: "#9acc54",
                            padding: "2px 12px",
                            borderRadius: "8px",
                          }}
                        >
                          Price
                        </span>
                      </Col>
                    </Col>
                  </Col>
                  <Col className={styles.secondOuterColumn}>
                    {val == Object.keys(pricesToShow)[i]
                      ? Object.values(pricesToShow)[i].map((val2, j) => {
                        return (
                          <Col className={styles.column} key={j}>
                            <a
                              onMouseEnter={() => showModal(true, j, i)}
                              onMouseLeave={() => showModal(false, -1, -1)}
                            >
                              <BsInfoCircle className={styles.infoIcon} />
                              {modal.state == true &&
                                modal.id == j &&
                                modal.row == i ? (
                                <>
                                  {val == Object.keys(roomsNamesWithData)[i] ? (
                                    <div className={styles.popupModal}>
                                      <div>
                                        <span>
                                          <b>Total</b>
                                        </span>
                                        <span>
                                          {
                                            Object.values(
                                              Object.values(roomsNamesWithData)[
                                              i
                                              ]
                                            )[j].totalNoRooms
                                          }
                                        </span>
                                      </div>
                                      <div>
                                        <span>
                                          <b>Booked</b>
                                        </span>
                                        <span>
                                          {
                                            Object.values(
                                              Object.values(roomsNamesWithData)[
                                              i
                                              ]
                                            )[j].noOfBooked
                                          }
                                        </span>
                                      </div>
                                      <div>
                                        <span>
                                          <b>Hold</b>
                                        </span>
                                        <span>
                                          {
                                            Object.values(
                                              Object.values(roomsNamesWithData)[
                                              i
                                              ]
                                            )[j].noOfOnHold
                                          }
                                        </span>
                                      </div>
                                      <div>
                                        <span>
                                          <b>Available</b>
                                        </span>
                                        <span>
                                          {
                                            Object.values(
                                              Object.values(roomsNamesWithData)[
                                              i
                                              ]
                                            )[j].noOfAvailable
                                          }
                                        </span>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                            </a>
                            <span>₹{val2}</span>
                          </Col>
                        );
                      })
                      : ""}
                    <Col className={styles.rightArrow}>
                      <MdArrowRight style={{ color: "none" }} />
                    </Col>
                  </Col>
                </Row>
                {Object.values(plansToShow)[i] !== undefined &&
                  Object.values(plansToShow)[i] !== null && Object.keys(Object.values(plansToShow)[i]).length !== 0 ? (
                  <div
                    className={styles.shopBtn}
                    onClick={() => handleShopModal1(shopModal.state, i)}
                  >
                    Plans <AiFillCaretDown />
                    {shopModal.state == true && shopModal.row == i ? (
                      <div
                        className={styles.shopModal}
                        style={
                          shopModal ? { display: "block" } : { display: "none" }
                        }
                      >
                        {Object.keys(Object.values(plansToShow)[i]).map(
                          (val3, z) => {
                            return (
                              <li
                                key={z}
                                onClick={() =>
                                  setSelectedPlan({
                                    planName: val3,
                                    planId: i,
                                  })
                                }
                              >
                                {val3}
                              </li>
                            );
                          }
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className={styles.shopBtn}>No Plans</div>
                )}
                {val == Object.keys(plansToShow)[i]
                  ? Object.keys(Object.values(plansToShow)[i]).map((val2, j) => {
                    return (
                      <>
                        {selectedPlan.planName == val2 &&
                          selectedPlan.planId == i ? (
                          <Row className={styles.secondRow} key={j}>
                            <Col className={styles.firstOuterColumn}>
                              <Col className={styles.leftArrow2}>
                                <Col className={styles.colPlans}>
                                  <Col className={styles.colButton}></Col>
                                </Col>
                                <Col className={styles.colBot}>
                                  <span
                                    style={{
                                      color: "#9acc54",
                                      padding: "2px 12px",
                                      borderRadius: "8px",
                                      border: "1px solid #9acc54",
                                    }}
                                  >
                                    {val2}
                                  </span>
                                </Col>
                              </Col>
                            </Col>
                            <Col className={styles.secondOuterColumn}>
                              {Object.values(Object.values(plansToShow)[i])[
                                j
                              ].map((val3, k) => {
                                return (
                                  <Col className={styles.column2} key={k}>
                                    <span>{parseInt(val3.amount) !== 0 ? `₹${parseInt(val3.amount)}` : 'No Plan'}</span>
                                  </Col>
                                );
                              })}
                              <Col className={styles.rightArrow}>
                                <MdArrowRight style={{ color: "none" }} />
                              </Col>
                            </Col>
                          </Row>
                        ) : (
                          ""
                        )}
                      </>
                    );
                  })
                  : ""}
                <hr />
              </>
            );
          })}
        </div>
      </div>}
    </>
  );
};
export default Home;
function MyVerticallyCenteredModal(props) {
  // console.log(props.plans)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.modalBody}>
          <div>
            <Carousel style={{ height: "300px", width: "300px" }}>
              {props.images &&
                props.images.map((val, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <img
                        style={{ height: "300px", width: "300px" }}
                        src={val.url}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <div className={styles.modalBodyText}>
            <span>{props.plans && props.plans.join(", ")}</span>
            <hr />
          </div>
        </div>
        <div className={styles.modalContainer}>
          <div className={styles.box}>
            {props.facilities &&
              props.facilities.map((val, i) => {
                return (
                  <div key={i}>
                    <img src={val.logoUrl} alt="" className={styles.logo} />
                    {val.name}
                  </div>
                );
              })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}



export async function getStaticPaths() {
  const res = await fetch(
   "https://testapi.bookonelocal.co.nz/api-bookone/api/organisation/1/properties",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBib29rb25lbG9jYWwuaW4iLCJzY29wZXMiOiJST0xFX09SR19BRE1JTiIsImlhdCI6MTY2MTc3NTAzNCwiZXhwIjoxNjYyMjA3MDM0fQ.Hagno4ioyrtu9Ggt2v7gif4h0aAWUSKDMH7PkUxoodg",
        "Content-Type": "application/json",
        APP_ID: "BOOKONE_WEB_APP",
        User_Id:"2",
        
      },
    }
  );
  const data = await res.json()
  const paths = data.map((a)=>{
    return {
      params : {propertyId: a.id.toString()}
    }
  })
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // console.log(context)

  const { propertyId } = context.params;
  const currentDateToShow2Resp = await fetch('https://api-for-dates.herokuapp.com/getCurrentDate');
  const currentDateToShow2 = await currentDateToShow2Resp.json();
  const LastDateToShow2Resp = await fetch('https://api-for-dates.herokuapp.com/getLastDate');
  const lastDateToShow2 = await LastDateToShow2Resp.json();
// const lastDateToShow2 = await lastDateToShow1
// const currentDateToShow2 = await currentDateToShow1
  // console.log(lastDateToShow2.date)
  // console.log(currentDateToShow2.date)

//   let currentDate1 = new Date();
// let lastDate1 = new Date();
// lastDate1 = new Date(lastDate1.setDate(currentDate1.getDate() + 11));
// let currentFilteredDate1 = currentDate1
//   .toLocaleDateString()
//   .split("/")
//   .reverse();
// let lastFilteredDate1 = lastDate1.toLocaleDateString().split("/").reverse();
// for (let index = 0; index < currentFilteredDate1.length; index++) {
//   if (currentFilteredDate1[index] < 10) {
//     currentFilteredDate1[index] = "0" + currentFilteredDate1[index];
//   }
//   // console.log(currentFilteredDate[index])
// }
// for (let index = 0; index < lastFilteredDate1.length; index++) {
//   if (lastFilteredDate1[index] < 10) {
//     lastFilteredDate1[index] = "0" + lastFilteredDate1[index];
//   }
//   // console.log(currentFilteredDate[index])
// }
// let currentDateToShow1 = currentFilteredDate1.join("-");
// let lastDateToShow1 = lastFilteredDate1.join("-");
// console.log(lastDateToShow1)
// console.log(currentDateToShow1)


  // console.log(context)
  // let dummydate = new Date("2022-07-20");
  // console.log(dummydate)

  // const propertyId = context.query.params;
  // const propertyId = context.query.propertyId;
  const propertiesResponse = await fetch(
    `https://api.bookonelocal.in/api-bookone/api/property/${propertyId}/rooms`,
    {
      // const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=495', {
      // const response = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=495&RoomId=1539', {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY2MTc3MDQ0NCwiZXhwIjoxNjYyMjAyNDQ0fQ.NRXtZudUnLIGr6obtDwywLK4mwvvFwPFb0VN6mydcWk",
        "Content-Type": "application/x-www-form-urlencoded",
        APP_ID: "BOOKONE_WEB_APP",
      },
    }
  );
  const oldProperties = await propertiesResponse.json();
  //This is for fetching property data by dates
  const propertyResponse = await fetch(
    "https://api.bookonelocal.in/api-bookone/api/availability/getRatesAndAvailabilityForPropertyByDate",
    {
      method: "POST",
      body: JSON.stringify({
        fromDate: currentDateToShow2.date,
        // fromDate: "2022-07-22",
        propertyId: propertyId,
        toDate: lastDateToShow2.date
        // toDate: "2022-08-01"
      }),
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY2MTc3MDQ0NCwiZXhwIjoxNjYyMjAyNDQ0fQ.NRXtZudUnLIGr6obtDwywLK4mwvvFwPFb0VN6mydcWk",
        "Content-Type": "application/json",
        APP_ID: "BOOKONE_WEB_APP",
      },
    }
  );
  const oldProperty = await propertyResponse.json();
  //This is for fetching rooms data by dates
  const oldRoomsArray = [];
  for (let index = 0; index < oldProperties.length; index++) {
    const oldRoomsResponse = await fetch(
      `https://api.bookonelocal.in/api-bookone/api/availability/getRatesAndAvailabilityForRoomByDate`,
      {
        method: "POST",
        body: JSON.stringify({
          fromDate: currentDateToShow2.date,
          // fromDate: "2022-07-22",
          propertyId: propertyId,
          roomId: oldProperties[index].id,
          // toDate: "2022-08-01",
          toDate: lastDateToShow2.date,
        }),
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY2MTc3MDQ0NCwiZXhwIjoxNjYyMjAyNDQ0fQ.NRXtZudUnLIGr6obtDwywLK4mwvvFwPFb0VN6mydcWk",
          "Content-Type": "application/json",
          APP_ID: "BOOKONE_WEB_APP",
        },
      }
    );
    const oldRooms = await oldRoomsResponse.json();
    oldRoomsArray.push(oldRooms);
  }
  // console.log(oldProperty)
  // console.log(oldRoomsArray)
  // This is for fetching 7 days data for Property
  // const propertyResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=237', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'APP_ID': 'BOOKONE_WEB_APP'
  //   }
  // })
  // const property = await propertyResponse.json();
  //This is for fetching 7 days Data of rooms
  // const roomsArray = [];
  // for (let index = 0; index < properties.length; index++) {
  //   const roomsResponse = await fetch(`https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=237&RoomId=${properties[index].id}`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'APP_ID': 'BOOKONE_WEB_APP'
  //     }
  //   })
  //   const rooms = await roomsResponse.json();
  //   roomsArray.push(rooms);
  // }
  return { props: { oldProperties, oldRoomsArray, oldProperty, propertyId } };

}

