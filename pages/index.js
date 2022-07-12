import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { FaBed } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { BsFillTagFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { GoTriangleRight } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import { GrRotateLeft } from 'react-icons/gr';
import { useState } from 'react';

export default function Home({ properties, roomsArray, property }) {
  const [increment, setIncrement] = useState(0);
  // console.log(property);
  const roomTypes = [];
  let room = [];
  let roomDetail = [];

  //This loop will extract the name of property and will make it as a key of its data
  for (let index = 0; index < properties.length; index++) {
    if (!roomTypes[properties[index].name]) {
      roomTypes[properties[index].name] = JSON.parse(JSON.stringify(properties[index]));
    }
  }
  delete roomTypes['Official  Use'];
  // console.log(roomTypes)
  
  // console.log(roomsArray)

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


  // console.log(roomsPlansData)


  // console.log(classicPlansToShow)

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

  //This function will Increement Seven Days
  const sevenDaysIncrement = () => {
    setIncrement(increment + 7)
  }

  //This function will Decrement Seven Days
  const sevenDaysDecrement = () => {
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


  datesToShow = datesToShow.slice(increment, increment + 14)
  daysToShow = daysToShow.slice(increment, increment + 14);
  monthToShow = monthToShow.slice(increment, increment + 14)
  // console.log(monthToShow)
  // console.log(monthToShow)
  // console.log(datesToShow);
  // console.log(roomTypes)
  // console.log(Object.values(deluxPlansToShow)[0])

  // console.log(Object.keys(fullRoomDeatils))
  console.log(Object.values(fullRoomDeatils)[0].Details[0].roomName)

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.topBar}>
          <div className={styles.topBarButtons}>
            <div className={styles.buttonsWrapper}>
              <button className={styles.bulkUpdateBtn}>Bulk Update</button>
              <span><GrRotateLeft size={13} style={{ marginRight: '5px' }} /><span>Reset</span></span>
              <button className={styles.saveBtn}>Save</button>
            </div>
          </div>
          <Row className={styles.dateSection}>
            <Col className={styles.dateSelector}>
              <span><GrRotateLeft onClick={refreshDates} size={15} style={{ marginRight: '10px' }} /><AiOutlineDoubleLeft onClick={fourteenDaysDecrement} size={15} style={{ marginRight: '10px' }} /><MdKeyboardArrowLeft onClick={sevenDaysDecrement} />{date.toDateString()}<MdKeyboardArrowRight onClick={sevenDaysIncrement} /><AiOutlineDoubleRight onClick={fourteenDaysIncrement} size={15} style={{ marginLeft: '10px' }} /></span>
            </Col>
            <Col className={styles.dates}>
              <Row className={styles.dateCards}>
                {datesToShow.map((val, i) => {
                  return (<Col key={i} className={styles.dateCard}>
                    <span>
                      {daysToShow[i]}
                    </span>
                    <span className={styles.boldDateText}>
                      {val}
                    </span>
                    <span>
                      {monthToShow[i]}
                    </span>
                  </Col>)
                })
                }
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.buttonGroup}>
          <Row>
            <Col className={styles.buttons}>
              <button className={`${styles.buttonHover} ${styles.button} `}>All Rates & Availablity<span><MdOutlineArrowDropDown size={22} style={{ marginBottom: '2px' }} /></span></button>
              <button className={styles.button}><FaBed style={{ marginRight: '8px', marginBottom: '2px' }} size={15} />All Room Types<MdOutlineArrowDropDown size={22} style={{ marginLeft: '2px', marginBottom: '2px' }} /></button>
              <button className={styles.button}><BsFillTagFill style={{ marginRight: '8px', marginBottom: '2px' }} />All Rates Plans<MdOutlineArrowDropDown size={22} style={{ marginLeft: '2px', marginBottom: '4px' }} /></button>
              <div className={styles.inputItem}><span><BiSearch size={15} style={{ marginBottom: '1px' }} /></span><input placeholder='Search room Rates' /></div>
              <span>Clear all filters</span>
            </Col>
            <Col className={styles.rightlinkText}>
              <div className={styles.linkText}>
                <GoTriangleRight size={20} style={{ marginBottom: '3px' }} /><span>Quick Tour - Inventory Grid</span>
              </div>
            </Col>
          </Row>
        </div>
        {Object.keys(fullRoomDeatils).map((val, index) => (
          <div key={index}>
            <div className={styles.item}>
              <Row className={styles.heading}>
                <Col className={styles.Icon}>
                  <FaBed size={18} style={{ marginTop: '5px' }} />
                </Col>
                <Col className={styles.leftSection}>
                  <span>{val}</span>
                  <AiFillThunderbolt size={15} style={{ marginTop: '5px', color: '#2494d1' }} />
                </Col>
                <Col className={styles.midSection}>
                  Avail
                </Col>
                <Col className={styles.rightSection}>
                  <Row className={styles.data}>
                    {/* {val.name == 'Deluxe Room'?
            DeluxeRoom.map((val,i)=>{
              return (<Col key={i} className={styles.col} >
                {val.roomDetails.length}
              </Col>)
            }): val.name == 'Supreme Room'? SupremeRoom.map((val,i)=>{
              return (<Col key={i} className={styles.col} >
                {val.roomDetails.length}
              </Col>)
            }) : val.name == 'Classic Room'? ClassicRoom.map((val,i)=>{
              return (<Col key={i} className={styles.col} >
                {val.roomDetails.length}
              </Col>)
            }): ''} */}
                    {val.name == Object.keys(roomsNamesWithData)[index] ?
                      Object.values(roomsNamesWithData)[index].map((val, i) => {
                        return (<Col key={i} className={styles.col} >
                          {val.roomDetails.length}
                        </Col>)
                      }) : Object.keys(roomsNamesWithData)[index] ? Object.values(roomsNamesWithData)[index].map((val, i) => {
                        return (<Col key={i} className={styles.col} >
                          {val.roomDetails.length}
                        </Col>)
                      }) : ''}
                    {/* {val == Object.keys(fullRoomDeatils)?
            Object.values(fullRoomDeatils)[index].map((val,i)=>{
              return (<Col key={i} className={styles.col} >
                {val.roomDetails.length}
              </Col>)
            }): Object.keys(fullRoomDeatils)?Object.values(fullRoomDeatils)[index].map((val,i)=>{
              return (<Col key={i} className={styles.col} >
                {val.roomDetails.length}
              </Col>)
            }) :''} */}
                    { }
                    <Col className={styles.col} >
                      10
                    </Col>
                    <Col className={styles.col} >
                      10
                    </Col>
                    <Col className={styles.col} >
                      10
                    </Col>
                    <Col className={styles.col} >
                      10
                    </Col>
                    <Col className={styles.col} >
                      10
                    </Col>
                    <Col className={styles.col} >
                      10
                    </Col>
                    <Col className={styles.col} >
                      10
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className={styles.content}>
                {/* Room Rate Plans */}
                {val.name == 'Deluxe Room' ? Object.keys(deluxPlansToShow).map((val1, i) => {
                  return (
                    <>
                      <Col className={styles.Icon}>

                      </Col>
                      <Col className={styles.leftSection}>
                        {val1}
                        <AiFillThunderbolt size={15} style={{ marginTop: '5px', color: '#2494d1' }} />
                      </Col>
                      <Col className={styles.midSection}>
                        Rates
                      </Col>
                      <Col className={styles.rightSection}>
                        <Row className={styles.data}>
                          {val.name == 'Deluxe Room' ?
                            Object.values(deluxPlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : val.name == 'Supreme Room' ? Object.values(supremePlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : val.name == 'Classic Room' ? Object.values(classicPlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : ''}
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                        </Row>
                      </Col>
                    </>
                  )
                }) : val.name == 'Supreme Room' ? Object.keys(supremePlansToShow).map((val1, i) => {
                  return (
                    <>
                      <Col className={styles.Icon}>

                      </Col>
                      <Col className={styles.leftSection}>
                        {val1}
                        <AiFillThunderbolt size={15} style={{ marginTop: '5px', color: '#2494d1' }} />
                      </Col>
                      <Col className={styles.midSection}>
                        Rates
                      </Col>
                      <Col className={styles.rightSection}>
                        <Row className={styles.data}>
                          {val.name == 'Deluxe Room' ?
                            Object.values(deluxPlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : val.name == 'Supreme Room' ? Object.values(supremePlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : val.name == 'Classic Room' ? Object.values(classicPlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : ''}
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                        </Row>
                      </Col>
                    </>
                  )
                }) : val.name == 'Classic Room' ? Object.keys(classicPlansToShow).map((val1, i) => {
                  return (
                    <>
                      <Col className={styles.Icon}>

                      </Col>
                      <Col className={styles.leftSection}>
                        {val1}
                        <AiFillThunderbolt size={15} style={{ marginTop: '5px', color: '#2494d1' }} />
                      </Col>
                      <Col className={styles.midSection}>
                        Rates
                      </Col>
                      <Col className={styles.rightSection}>
                        <Row className={styles.data}>
                          {val.name == 'Deluxe Room' ?
                            Object.values(deluxPlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : val.name == 'Supreme Room' ? Object.values(supremePlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : val.name == 'Classic Room' ? Object.values(classicPlansToShow)[i].map((val2, j) => {
                              return (<Col key={j} className={styles.col} >
                                {val2.amount}
                              </Col>)
                            }) : ''}
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                          <Col className={styles.col} >
                            10
                          </Col>
                        </Row>
                      </Col>
                    </>
                  )
                }) : ''}
              </Row>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/property/495/rooms', {
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

  const propertyResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=495', {
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
    const roomsResponse = await fetch(`https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=495&RoomId=${properties[index].id}`, {
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
