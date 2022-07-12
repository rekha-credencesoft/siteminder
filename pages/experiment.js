import React from "react";
import styles from "../styles/experiment.module.css";
import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Experiment = ({properties,roomsArray,property}) => {
  const [increment, setIncrement] = useState(0);
  // console.log(property);
  const roomTypes = [];
  let room = [];
  let roomDetail = [];

  //This loop will extract the name of property and will make it as a key of its data
  for (let index = 0; index < properties.length; index++) {
    if (!roomTypes[properties[index].name]) {
      roomTypes[properties[index].name]=JSON.parse(JSON.stringify(properties[index]));
    }
  }
  delete roomTypes['Official  Use'];
  // console.log(roomTypes)


  //This loop will add the data of rooms according to the roomId
  // for (let i = 0; i < roomsArray.length; i++) {
  //   room = roomsArray[i];
  //   let keys = Object.values(roomTypes);
  //   for (let k = 0; k < keys.length; k++) {
  //     // console.log(keys[k].id)
  //     for (let j = 0; j < room.length; j++) {
  //       // console.log(room[j].roomId)
  //           if(room[j].roomId == keys[k].id && room[j].roomName == keys[k].name){
  //             // console.log(keys[k]);
  //             roomDetail.push(keys[k])
  //             keys[k]['roomDetail'] = roomDetail;
  //           }
  //         }
  //         roomDetail = []
  //       }
  //     }
  
  // console.log(roomsArray)
  let DeluxeRoom = [];
  let ClassicRoom = [];
  let SupremeRoom = [];
  for (let i = 0 ; i < roomsArray.length ; i++) {
    let room = roomsArray[i];
    for (let j = 0; j < room.length; j++) {
    //  room[j]['hie'] = 'hie'
      for (let k = 0; k < properties.length; k++) {
        if (properties[k].name == room[j].roomName) {
            room[j]['roomDetail'] = properties[k];
        }
        // console.log(properties[k])
        
      }
    }
    // console.log(roomsArray[index])
    // console.log(room)
    for (let l = 0; l < room.length; l++) {
      // console.log(room[l].roomName)
      switch (room[l].roomName) {
        case "Deluxe Room":
          DeluxeRoom = room;
          break;
        case  "Classic Room":
          ClassicRoom = room;
          break;
        case "Supreme Room":
          SupremeRoom = room;
      }
      
    }
    // room = [];
  }

  //237
  let roomsData = [];
  let roomsNamesWithData = {};
  for (let index = 0; index < Object.keys(roomTypes).length; index++) {
    if(!roomsData[Object.keys(roomTypes)[index]]){
      Object.keys(roomTypes)[index] = [];
      // obj[Object.keys(roomTypes)[index]] = [];
      roomsData.push(Object.keys(roomTypes)[index])
    }
  }
  // console.log(roomsData)

  let DoubleRoom = [];
  let TwinRoom = [];
  let BanquetHall = [];
  let OneDayTrip = [];
  for (let i = 0 ; i < roomsArray.length ; i++) {
    let room = roomsArray[i];
    for (let j = 0; j < room.length; j++) {
    //  room[j]['hie'] = 'hie'
      for (let k = 0; k < properties.length; k++) {
        if (properties[k].name == room[j].roomName) {
            room[j]['roomDetail'] = properties[k];
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
        roomsNamesWithData[roomsData[l]] = room
        // roomsData[l] = rooms
      }
      
    }
    // room = [];
  }
  // console.log(roomsNamesWithData)
  // console.log(Object.keys(roomsNamesWithData))
  // console.log(Object.values(roomsNamesWithData)[0])


  //This will fetch The room Rate Plans of each room in their particular room keys

  // console.log(roomsData[0][0].roomRatePlans)
  let roomsPlansToShow = [];
  let roomsPlansNames = {};
  for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
    // console.log(Object.values(roomsNamesWithData)[index]);
    // console.log(Object.keys(roomsNamesWithData)[index]);
    // let roomData = roomsData[index];
    for (let jindex = 0; jindex < Object.values(roomsNamesWithData)[index].length; jindex++) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex]);
      if (!roomsPlansNames[Object.keys(roomsNamesWithData)[index]]) {
        roomsPlansNames[Object.keys(roomsNamesWithData)[index]] = [];
        roomsPlansNames[Object.keys(roomsNamesWithData)[index]].push(Object.values(roomsNamesWithData)[index][jindex].roomRatePlans);
      }
      else{
        roomsPlansNames[Object.keys(roomsNamesWithData)[index]].push(Object.values(roomsNamesWithData)[index][jindex].roomRatePlans);
      }
    }
    
  }
  // console.log(roomsData)
  // console.log(roomsPlansNames);

  //Fetching room rate plans
  for (let index = 0; index < Object.values(roomsPlansNames).length; index++) {
    // console.log(Object.values(roomsPlansNames)[index]);
    for (let jindex = 0; jindex < Object.values(roomsPlansNames)[index].length; jindex++) {
      // console.log(Object.values(roomsPlansNames)[index][jindex]);
      for (let zindex = 0; zindex < Object.values(roomsPlansNames)[index][jindex].length; zindex++) {
        // console.log(Object.values(roomsPlansNames)[index][jindex][zindex]);
        if (!roomsPlansToShow[Object.values(roomsPlansNames)[index][jindex][zindex].name]) {
          roomsPlansToShow[Object.values(roomsPlansNames)[index][jindex][zindex].name] = [];
          roomsPlansToShow[Object.values(roomsPlansNames)[index][jindex][zindex].name].push(Object.values(roomsPlansNames)[index][jindex][zindex]);
        }
        else{
          roomsPlansToShow[Object.values(roomsPlansNames)[index][jindex][zindex].name].push(Object.values(roomsPlansNames)[index][jindex][zindex]);
        }
      }
    }
    
  }

  let roomPlansToShowTrial = [];
  for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (let jindex = 0; jindex < Object.values(roomsNamesWithData)[index].length; jindex++) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex].roomId)
      // console.log(Object.values(roomsNamesWithData)[index][jindex])
      for (let zindex = 0; zindex < Object.values(roomsPlansToShow).length; zindex++) {
        // console.log(Object.values(roomsPlansToShow)[zindex])
        for (let ndex = 0; ndex < Object.values(roomsPlansToShow)[zindex].length; ndex++) {
          // console.log(Object.values(roomsPlansToShow)[zindex][ndex].roomId)
          // console.log(Object.values(roomsPlansToShow)[zindex][ndex].name)
          if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName]) {
            roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName] = [];

            if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name] && Object.values(roomsNamesWithData)[index][jindex].roomId == Object.values(roomsPlansToShow)[zindex][ndex].roomId) {
              roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name] = [];
              if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(Object.values(roomsPlansToShow)[zindex][ndex])) {
                roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].push(Object.values(roomsPlansToShow)[zindex][ndex]);
              }
            }
            else if (Object.values(roomsNamesWithData)[index][jindex].roomId == Object.values(roomsPlansToShow)[zindex][ndex].roomId){
              if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(Object.values(roomsPlansToShow)[zindex][ndex])) {
                roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].push(Object.values(roomsPlansToShow)[zindex][ndex]);
              }
            }
          }
          else {
              if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name] && Object.values(roomsNamesWithData)[index][jindex].roomId == Object.values(roomsPlansToShow)[zindex][ndex].roomId) {
                roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name] = [];
                if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(Object.values(roomsPlansToShow)[zindex][ndex])) {
                  roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].push(Object.values(roomsPlansToShow)[zindex][ndex]);
                }
              }
              else if (Object.values(roomsNamesWithData)[index][jindex].roomId == Object.values(roomsPlansToShow)[zindex][ndex].roomId){
                if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(Object.values(roomsPlansToShow)[zindex][ndex])) {
                  roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].push(Object.values(roomsPlansToShow)[zindex][ndex]);
                }
              }
            }
        }
        
      }
      
    }
    
  }

  let fullRoomDeatils = [];
  for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (let jindex = 0; jindex < Object.values(roomPlansToShowTrial).length; jindex++) {
      // console.log(Object.values(roomPlansToShowTrial)[jindex])
      if(Object.keys(roomsNamesWithData)[index] == Object.keys(roomPlansToShowTrial)[jindex]){
          fullRoomDeatils[Object.keys(roomsNamesWithData)[index]] = {'Details': Object.values(roomsNamesWithData)[index],'Plans':Object.values(roomPlansToShowTrial)[jindex]}
      }
      
    }
  }

  // console.log(fullRoomDeatils);

  // for (let index = 0; index < Object.values(roomsPlansToShow).length; index++) {
  //   console.log(Object.values(roomsPlansToShow)[index])
    
  // }
  // console.log(roomPlansToShowTrial)

  // console.log(roomsPlansToShow)
  // console.log(Object.values(roomsPlansToShow))
  // console.log(DoubleRoom);
  // console.log(TwinRoom);
  // console.log(BanquetHall);
  // console.log(OneDayTrip);
  // console.log(properties)

  //Trial
  // let roomsPlansData = [];
  // let roomsPlanName = {};
  // for (let index = 0; index < roomsData.length; index++) {
  //   // console.log(roomsData[index])
  //   if(!roomsPlansData[Object.keys(roomsData)[index]]){
  //     Object.keys(roomsData)[index] = [];
  //     // obj[Object.keys(roomTypes)[index]] = [];
  //     roomsPlansData.push(Object.keys(roomTypes)[index])
  //   }
    
  // }
  // console.log(roomsPlansData)


  //Deluxe Room Plans
  let deluxeRoomPlans = [];
  for (let index = 0; index < DeluxeRoom.length; index++) {
    // console.log(DeluxeRoom[index].roomRatePlans)
    deluxeRoomPlans.push(DeluxeRoom[index].roomRatePlans);
  }
  // console.log(deluxeRoomPlans)


  //Deluxe room Plans to Show
  let deluxPlansToShow = [];
  for (let index = 0; index < deluxeRoomPlans.length; index++) {
    // console.log(deluxeRoomPlans[index][0])
    for (let jindex = 0; jindex < deluxeRoomPlans[index].length; jindex++) {
      if(!deluxPlansToShow[deluxeRoomPlans[index][jindex].name]){
        deluxPlansToShow[deluxeRoomPlans[index][jindex].name] = [];
        deluxPlansToShow[deluxeRoomPlans[index][jindex].name].push(deluxeRoomPlans[index][jindex])
      }
      else {
        deluxPlansToShow[deluxeRoomPlans[index][jindex].name].push(deluxeRoomPlans[index][jindex])
      }
    }
  }
  // console.log(deluxPlansToShow)


  //Supreme Room Plans
  let supremeRoomPlans = [];
  for (let index = 0; index < SupremeRoom.length; index++) {
    // console.log(DeluxeRoom[index].roomRatePlans)
    supremeRoomPlans.push(SupremeRoom[index].roomRatePlans);
  }
  // console.log(supremeRoomPlans)


  //Supreme Room Plans To Show
  let supremePlansToShow = [];
  for (let index = 0; index < supremeRoomPlans.length; index++) {
    // console.log(supremeRoomPlans[index][0])
    for (let jindex = 0; jindex < supremeRoomPlans[index].length; jindex++) {
      if(!supremePlansToShow[supremeRoomPlans[index][jindex].name]){
        supremePlansToShow[supremeRoomPlans[index][jindex].name] = [];
        supremePlansToShow[supremeRoomPlans[index][jindex].name].push(supremeRoomPlans[index][jindex])
      }
      else {
        supremePlansToShow[supremeRoomPlans[index][jindex].name].push(supremeRoomPlans[index][jindex])
      }
    }
  }
  // console.log(supremePlansToShow)


  //Classic Room Plans
  let classicRoomPlans = [];
  for (let index = 0; index < ClassicRoom.length; index++) {
    // console.log(DeluxeRoom[index].roomRatePlans)
    classicRoomPlans.push(ClassicRoom[index].roomRatePlans);
  }
  // console.log(classicRoomPlans)


  //Classic Room Plans To Show
  let classicPlansToShow = [];
  for (let index = 0; index < classicRoomPlans.length; index++) {
    // console.log(classicRoomPlans[index][0])
    for (let jindex = 0; jindex < classicRoomPlans[index].length; jindex++) {
      if(!classicPlansToShow[classicRoomPlans[index][jindex].name]){
        classicPlansToShow[classicRoomPlans[index][jindex].name] = [];
        classicPlansToShow[classicRoomPlans[index][jindex].name].push(classicRoomPlans[index][jindex])
      }
      else {
        classicPlansToShow[classicRoomPlans[index][jindex].name].push(classicRoomPlans[index][jindex])
      }
    }
  }
  // console.log(classicPlansToShow)
  



  //Function to find out last date of the month
  const lastday = function(y,m){
    return  new Date(y, m +1, 0);
  }
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
        daysToShow.push('Sun');
        break;
      case 1:
        daysToShow.push('Mon');
        break;
      case 2:
        daysToShow.push('Tue');
        break;
      case 3:
        daysToShow.push('Wed');
        break;
      case 4:
        daysToShow.push('Thu');
        break;
      case 5:
        daysToShow.push('Fri');
        break;
      case 6:
        daysToShow.push('Sat');
      }
      
      switch (month) {
        case 0:
        monthToShow.push('Jan');
        break;
      case 1:
        monthToShow.push('Feb');
        break;
      case 2:
        monthToShow.push('Mar');
        break;
      case 3:
        monthToShow.push('Apr');
        break;
      case 4:
        monthToShow.push('May');
        break;
        case 5:
          monthToShow.push('Jun');
          break;
        case 6:
          monthToShow.push('Jul');
          break;
        case 7:
          monthToShow.push('Aug');
          break;
        case 8:
          monthToShow.push('Sep');
          break;
        case 9:
          monthToShow.push('Oct');
          break;
        case 10:
          monthToShow.push('Nov');
          break;
        case 11:
          monthToShow.push('Dec');
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

//This function will Increement Seven Days
const oneDayIncrement = () => {
  setIncrement(increment + 1)
}

//This function will Decrement Seven Days
const oneDayDecrement = () => {
  if (increment !== 0) {
    setIncrement(increment - 1)
  }

}

//This will Decrement Days by Fourteen
const fourteenDaysDecrement = () => {
  if(increment == 7) {
    setIncrement(0)
  }
  else if (increment !== 0) {
    setIncrement(increment - 14)
  }
}

//This will Increment Days by Fourteen
const fourteenDaysIncrement = () => {
  setIncrement(increment + 14)
}

//This will refresh dates
const refreshDates = ()=>{
  setIncrement(0)
}


//To Show Single Image of room Types
let imageObj = {};
for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
  // console.log(Object.values(roomsNamesWithData)[index])
  for (let jindex = 0; jindex < Object.values(roomsNamesWithData)[index].length; jindex++) {
    // console.log(Object.values(roomsNamesWithData)[index][jindex])
    for (let ndex = 0; ndex < Object.values(roomsNamesWithData)[index][jindex].roomDetail.imageList.length; ndex++) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex].roomDetail.imageList[0])
      if(!imageObj[Object.keys(roomsNamesWithData)[index]]){
        imageObj[Object.keys(roomsNamesWithData)[index]] = Object.values(roomsNamesWithData)[index][jindex].roomDetail.imageList[0]
      }
    }
  }
}
// console.log(imageObj)


  datesToShow = datesToShow.slice(increment,increment + 10)
  daysToShow = daysToShow.slice(increment,increment + 10);
  monthToShow = monthToShow.slice(increment,increment + 10)
  // console.log(monthToShow)
  // console.log(monthToShow)
  // console.log(datesToShow);
  // console.log(roomTypes)
  // console.log(Object.values(deluxPlansToShow)[0])

  // console.log(Object.keys(fullRoomDeatils))
  // console.log(Object.values(fullRoomDeatils)[0].Details[0].roomName)
  // console.log(Object.values(roomsNamesWithData)[0])
  // console.log(Object.keys(roomsNamesWithData))
  // console.log(Object.values(roomsNamesWithData))
  // console.log(dates);
  let priceArray = [];
  for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (let jindex = 0; jindex < dates.length; jindex++) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex])
      if (!priceArray[Object.keys(roomsNamesWithData)[index]]) {
        priceArray[Object.keys(roomsNamesWithData)[index]] = [];
        priceArray[Object.keys(roomsNamesWithData)[index]].push(Object.values(roomsNamesWithData)[index][jindex].price)
        if (Object.values(roomsNamesWithData)[index][jindex] == undefined) {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(0)
        }
      }
      else{
        if (Object.values(roomsNamesWithData)[index][jindex] == undefined) {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(0)
        }
        else{
          priceArray[Object.keys(roomsNamesWithData)[index]].push(Object.values(roomsNamesWithData)[index][jindex].price)
        }
      }
      
    }
    
  }
  // console.log(priceArray)

  let pricesToShow = [];
  for (let index = 0; index < Object.values(priceArray).length; index++) {
    // console.log(Object.values(priceArray)[index])
    if (!pricesToShow[Object.keys(priceArray)[index]]) {
      pricesToShow[Object.keys(priceArray)[index]] = Object.values(priceArray)[index].slice(increment,increment + 10)
    }
  }
  // console.log(pricesToShow)

  return (
    <div className={styles.bigContainer}>
      <div className={styles.topContainer}>
        <Row className={styles.upperRow}>
          <Col className={styles.leftArrow}>
            <MdArrowLeft onClick={oneDayDecrement} />
          </Col>
          {datesToShow.map((val,i)=>{
            return (
              <Col className={styles.columnDate} key={i}>
                <div className={styles.spanContainer}>
                  <span>{daysToShow[i]}</span>
                  <span>{val}</span>
                  <span>{monthToShow[i]}</span>
                </div>
              </Col>
            )
          })}
          <Col className={styles.rightArrow}>
            <MdArrowRight onClick={oneDayIncrement} />
          </Col>
        </Row>
        {Object.keys(roomsNamesWithData).map((val,i)=>{
          return (
            <Row className={styles.row} key={i}>
          <Col className={styles.leftArrow2}>
            {/* <Row> */}
              <Col className={styles.col1}>
                {val == Object.keys(imageObj)[i]?<img key={i+1}
                    src={Object.values(imageObj)[i].url}
                    alt=''
                    className={styles.image}/>: <img key={i+1}
                    src="https://tse2.explicit.bing.net/th?id=OIP.38eE6cQfShw5U-lGbkcMCgHaEo&pid=Api&P=0&w=250&h=156"
                    alt=''
                    className={styles.image}/>}
              </Col>
              <Col className={styles.col2}>
                <span className={styles.text}>
                  {val}
                </span>
                <span className={styles.text}>
                  <Link href="/">More Info</Link>
                </span>
              </Col>
              <Col className={styles.col3}>
                <BsInfoCircle />
              </Col>
            {/* </Row> */}
          </Col>
          {val == Object.keys(pricesToShow)[i] ? Object.values(pricesToShow)[i].map((val2,j)=>{
            return (
              <Col className={styles.column} key={j}>
            <span>
              <input type="checkbox" />
            </span>
            <span>{val2}</span>
          </Col>
            )
          }): ''}
          {/* {Object.values(Object.values(roomsNamesWithData)[i]).map((val2,j)=>{
            return (
              <Col className={styles.column} key={j}>
            <span>
              <input type="checkbox" />
            </span>
            <span>{val2.price}</span>
          </Col>
            )
          })} */}
          <Col className={styles.rightArrow2}>
            <button className={styles.btn}>
              <span className={styles.span}>Book Now</span>
            </button>
          </Col>
        </Row>
          )
        })}
      </div>
    </div>
  );
};

export default Experiment;

export async function getServerSideProps(context) {
  const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/property/237/rooms', {
  // const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=495', {
  // const response = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=495&RoomId=1539', {
    method: 'GET',
      headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'APP_ID': 'BOOKONE_WEB_APP'
      }
    })
    const properties = await propertiesResponse.json();

  const propertyResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=237', {
    method: 'GET',
      headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'APP_ID': 'BOOKONE_WEB_APP'
      }
    })
    const property = await propertyResponse.json();

  const roomsArray = [];
  for (let index = 0; index < properties.length; index++) {
    const roomsResponse = await fetch(`https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=237&RoomId=${properties[index].id}`, {
      method: 'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8',
          'Content-Type': 'application/x-www-form-urlencoded',
          'APP_ID': 'BOOKONE_WEB_APP'
        }
      })
      const rooms = await roomsResponse.json();
      roomsArray.push(rooms);
  }
  return {
    props: {properties,roomsArray,property}, // will be passed to the page component as props
  }
}
