import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { FaCaretSquareRight } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { AiFillCopyrightCircle } from "react-icons/ai";

const Home = ({ properties, roomsArray, property }) => {
  const [increment, setIncrement] = useState(0);
  const [modal, setModal] = useState({ state: false, id: -1 });
  const [modalShow, setModalShow] = React.useState(false);
  const [details, setDetails] = useState({});
  // console.log(property);
  const roomTypes = [];
  let room = [];
  let roomDetail = [];
  const showModal = (state, id) => {
    setModal({
      state: state,
      id: id
    })
  }
  //This loop will extract the name of property and will make it as a key of its data
  for (let index = 0; index < properties.length; index++) {
    if (!roomTypes[properties[index].name]) {
      roomTypes[properties[index].name] = JSON.parse(JSON.stringify(properties[index]));
    }
  }
  delete roomTypes['Official  Use'];
  // console.log(roomTypes)
  // console.log(Object.values(roomTypes)[0].roomFacilities)


  console.log(roomsArray)


  //237
  let roomsData = [];
  let roomsNamesWithData = {};
  for (let index = 0; index < Object.keys(roomTypes).length; index++) {
    if (!roomsData[Object.keys(roomTypes)[index]]) {
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
  for (let i = 0; i < roomsArray.length; i++) {
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
      else {
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
        else {
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
            else if (Object.values(roomsNamesWithData)[index][jindex].roomId == Object.values(roomsPlansToShow)[zindex][ndex].roomId) {
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
            else if (Object.values(roomsNamesWithData)[index][jindex].roomId == Object.values(roomsPlansToShow)[zindex][ndex].roomId) {
              if (!roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].includes(Object.values(roomsPlansToShow)[zindex][ndex])) {
                roomPlansToShowTrial[Object.values(roomsNamesWithData)[index][jindex].roomName][Object.values(roomsPlansToShow)[zindex][ndex].name].push(Object.values(roomsPlansToShow)[zindex][ndex]);
              }
            }
          }
        }

      }

    }

  }
  // console.log(roomPlansToShowTrial)

  let fullRoomDeatils = [];
  for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (let jindex = 0; jindex < Object.values(roomPlansToShowTrial).length; jindex++) {
      // console.log(Object.values(roomPlansToShowTrial)[jindex])
      if (Object.keys(roomsNamesWithData)[index] == Object.keys(roomPlansToShowTrial)[jindex]) {
        fullRoomDeatils[Object.keys(roomsNamesWithData)[index]] = { 'Details': Object.values(roomsNamesWithData)[index], 'Plans': Object.values(roomPlansToShowTrial)[jindex] }
      }

    }
  }

  // console.log(fullRoomDeatils);


  //Function to find out last date of the month
  const lastday = function (y, m) {
    return new Date(y, m + 1, 0);
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

  // console.log(dates.length)
  // console.log(increment)
  //This function will Increement Seven Days
  const oneDayIncrement = () => {
    if (increment < dates.length -7 ) {
      setIncrement(increment + 7)
    }
  }

  //This function will Decrement Seven Days
  const oneDayDecrement = () => {
    if (increment !== 0) {
      setIncrement(increment - 7)
    }

  }

  //This will Decrement Days by Fourteen
  const fourteenDaysDecrement = () => {
    if (increment == 7) {
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
  const refreshDates = () => {
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
        if (!imageObj[Object.keys(roomsNamesWithData)[index]]) {
          imageObj[Object.keys(roomsNamesWithData)[index]] = Object.values(roomsNamesWithData)[index][jindex].roomDetail.imageList
        }
      }
    }
  }
  // console.log(Object.values(imageObj))
  // console.log(imageObj)


  datesToShow = datesToShow.slice(increment, increment + 10)
  daysToShow = daysToShow.slice(increment, increment + 10);
  monthToShow = monthToShow.slice(increment, increment + 10)
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
      else {
        if (Object.values(roomsNamesWithData)[index][jindex] == undefined) {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(0)
        }
        else {
          priceArray[Object.keys(roomsNamesWithData)[index]].push(Object.values(roomsNamesWithData)[index][jindex].price)
        }
      }

    }

  }
  console.log(priceArray)

  let pricesToShow = [];
  for (let index = 0; index < Object.values(priceArray).length; index++) {
    // console.log(Object.values(priceArray)[index])
    if (!pricesToShow[Object.keys(priceArray)[index]]) {
      pricesToShow[Object.keys(priceArray)[index]] = Object.values(priceArray)[index].slice(increment, increment + 10)
    }
  }
  // console.log(pricesToShow)
  // console.log(roomsNamesWithData)

  //For Getting the Available, Hold, Booked and Total value of Rooms
  let roomsInfo = {};
  for (let index = 0; index < Object.values(roomsNamesWithData).length; index++) {
    // console.log(Object.values(roomsNamesWithData)[index])
    for (let jindex = 0; jindex < Object.values(roomsNamesWithData)[index].length; jindex++) {
      // console.log(Object.values(roomsNamesWithData)[index][jindex]
      if (!roomsInfo[Object.keys(roomsNamesWithData)[index]]) {
        roomsInfo[Object.keys(roomsNamesWithData)[index]] = {
          noOfAvailable: '',
          totalNoRooms: '',
          noOfBooked: '',
          noOfOnHold: ''
        }
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfAvailable = Object.values(roomsNamesWithData)[index][jindex].noOfAvailable;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].totalNoRooms = Object.values(roomsNamesWithData)[index][jindex].totalNoRooms;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfBooked = Object.values(roomsNamesWithData)[index][jindex].noOfBooked;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfOnHold = Object.values(roomsNamesWithData)[index][jindex].noOfOnHold;
      }
      else {
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfAvailable = roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfAvailable + Object.values(roomsNamesWithData)[index][jindex].noOfAvailable;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].totalNoRooms = roomsInfo[Object.keys(roomsNamesWithData)[index]].totalNoRooms + Object.values(roomsNamesWithData)[index][jindex].totalNoRooms;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfBooked = roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfBooked + Object.values(roomsNamesWithData)[index][jindex].noOfBooked;
        roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfOnHold = roomsInfo[Object.keys(roomsNamesWithData)[index]].noOfOnHold + Object.values(roomsNamesWithData)[index][jindex].noOfOnHold;
      }

    }

  }
  // console.log(roomsInfo)

  return (
    <div className={styles.bigContainer}>
      <div className={styles.topContainer}>
        <Row className={styles.upperRow}>
          <Col className={styles.leftArrow}>
            <MdArrowLeft onClick={oneDayDecrement} />
          </Col>
          {datesToShow.map((val, i) => {
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
        {Object.keys(roomsNamesWithData).map((val, i) => {
          return (
            <Row className={styles.row} key={i}>
              <Col className={styles.leftArrow2}>
                {/* <Row> */}
                <Col className={styles.col1}>
                  {val == Object.keys(imageObj)[i] ? <img key={i + 1}
                    src={Object.values(imageObj)[i][0].url}
                    alt=''
                    className={styles.image} /> : <img key={i + 1}
                      src="https://tse2.explicit.bing.net/th?id=OIP.38eE6cQfShw5U-lGbkcMCgHaEo&pid=Api&P=0&w=250&h=156"
                      alt=''
                      className={styles.image} />}
                </Col>
                <Col className={styles.col2}>
                  <span className={styles.text}>
                    {val}
                  </span>
                  <span className={styles.text}>
                    <span className={styles.moreInfo} onClick={() => { setModalShow(true), setDetails({ name: Object.keys(roomTypes)[i], facilities: Object.values(roomTypes)[i].roomFacilities, images: Object.values(imageObj)[i], plans: Object.keys(Object.values(roomPlansToShowTrial)[i]) }) }} >More Info</span>
                    {val == Object.keys(roomTypes)[i] ? <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      name={details.name}
                      facilities={details.facilities}
                      images={details.images}
                      plans={details.plans}
                    /> : ''}
                    {/* <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> */}
                  </span>
                </Col>
                <Col className={styles.col3}>
                  <BsInfoCircle style={{cursor:"pointer"}} onMouseEnter={() => showModal(true, i)} onMouseLeave={() => showModal(false, -1)} />
                  {modal.state == true && modal.id == i ?
                    <>
                      {val == Object.keys(roomsInfo)[i] ?
                        <div className={styles.popupModal} onMouseEnter={() => showModal(true, i)} onMouseLeave={() => showModal(false, -1)}>
                          <div>
                            <span><b>Total</b></span>
                            <span>{Object.values(roomsInfo)[i].totalNoRooms}</span>
                          </div>
                          <div>
                            <span><b>Booked</b></span>
                            <span>{Object.values(roomsInfo)[i].noOfBooked}</span>
                          </div>
                          <div>
                            <span><b>Hold</b></span>
                            <span>{Object.values(roomsInfo)[i].noOfOnHold}</span>
                          </div>
                          <div>
                            <span><b>Available</b></span>
                            <span>{Object.values(roomsInfo)[i].noOfAvailable}</span>
                          </div>
                        </div> : ''}
                    </> : ""
                  }
                </Col>
                {/* </Row> */}
              </Col>
              {val == Object.keys(pricesToShow)[i] ? Object.values(pricesToShow)[i].map((val2, j) => {
                return (
                  <Col className={styles.column} key={j}>
                    <span>
                      <input type="checkbox" />
                    </span>
                    <span>{val2}</span>
                  </Col>
                )
              }) : ''}
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
            <Carousel
              style={{ height: "300px", width: "300px" }}>
              {props.images && props.images.map((val, i) => {
                return (
                  <Carousel.Item key={i}>
                    <img
                      style={{ height: "300px", width: "300px" }}
                      src={val.url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                )
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
            {props.facilities && props.facilities.map((val, i) => {
              return (
                <div key={i}> <img src={val.logoUrl} alt="" className={styles.logo} /> {val.name}</div>
              )
            })}
          </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

export async function getServerSideProps(context) {
<<<<<<< HEAD
  console.log(context)
  const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/property/237/rooms', {
=======
  const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/property/368/rooms', {
>>>>>>> da756fe6d03ca8a6cd90affcb05a15633878477d
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
   
  
  // const propertyResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getRatesAndAvailabilityForPropertyByDate', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     "fromDate": "2022-07-13",
  //     "propertyId": 495,
  //     "toDate": "2022-07-28"
  //   }),
  //   headers: {
  //     Accept: 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY1NzY4MzYwNiwiZXhwIjoxNjU4MTE1NjA2fQ.x_9KgO6qzcNbn8bqX4BuVGYmuEwAhbfeD9H_Q-LUWBo',
  //     'Content-Type': 'application/json',
  //     'APP_ID': 'BOOKONE_WEB_APP'
  //   }
  // })
  // const property = await propertyResponse.json()


  
  // const roomsArray = [];
  // for (let index = 0; index < properties.length; index++) {
  //   const roomsResponse = await fetch(`https://api.bookonelocal.in/api-bookone/api/availability/getRatesAndAvailabilityForPropertyByDate`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "fromDate": "2022-07-13",
  //       "propertyId": 495,
  //       "roomId": properties[index].id,
  //       "toDate": "2022-07-28"
  //     }),
  //     headers: {
  //       Accept: 'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib29rb25ldGVzdGJ1c2luZXNzQGdtYWlsLmNvbSIsInNjb3BlcyI6IlJPTEVfUFJPUF9BRE1JTiIsImlhdCI6MTY1NzY4MzYwNiwiZXhwIjoxNjU4MTE1NjA2fQ.x_9KgO6qzcNbn8bqX4BuVGYmuEwAhbfeD9H_Q-LUWBo',
  //       'Content-Type': 'application/json',
  //       'APP_ID': 'BOOKONE_WEB_APP'
  //     }
  //   })
  //   const rooms = await roomsResponse.json();
  //   roomsArray.push(rooms);
  // }

  // Original One of Property
  const propertyResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=368', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8',
      'Content-Type': 'application/x-www-form-urlencoded',
      'APP_ID': 'BOOKONE_WEB_APP'
    }
  })
  const property = await propertyResponse.json();




  //Original One of  Rooms
  const roomsArray = [];
  for (let index = 0; index < properties.length; index++) {
    const roomsResponse = await fetch(`https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=368&RoomId=${properties[index].id}`, {
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
    props: { properties, roomsArray, property }, // will be passed to the page component as props
  }
}
