import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import {FaBed} from 'react-icons/fa';
import {AiFillThunderbolt} from 'react-icons/ai';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import {BsFillTagFill} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {GoTriangleRight} from 'react-icons/go';
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md';
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai';
import {GrRotateLeft} from 'react-icons/gr';
import { useState } from 'react';

export default function Home({properties,roomsArray,property}) {
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

  console.log(DeluxeRoom);
  // console.log(SupremeRoom);
  // console.log(ClassicRoom);
  // console.log(properties)

  // for (let index = 0; index < room.length; index++) {
  //   console.log(room[index])
  // }



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


  datesToShow = datesToShow.slice(increment,increment + 14)
  daysToShow = daysToShow.slice(increment,increment + 14);
  monthToShow = monthToShow.slice(increment,increment + 14)
  // console.log(monthToShow)
  // console.log(monthToShow)
  // console.log(datesToShow);
  // console.log(roomTypes)

  return (
      <div className={styles.container}>
      <div className={styles.table}>
      <div className={styles.topBar}>
        <div className={styles.topBarButtons}>
         <div className={styles.buttonsWrapper}>
          <button className={styles.bulkUpdateBtn}>Bulk Update</button>
          <span><GrRotateLeft size={13} style={{marginRight: '5px'}}/><span>Reset</span></span>
          <button className={styles.saveBtn}>Save</button>
         </div>
        </div>
        <Row className={styles.dateSection}>
          <Col className={styles.dateSelector}>
            <span><GrRotateLeft onClick={refreshDates} size={15} style={{marginRight: '10px'}}/><AiOutlineDoubleLeft onClick={fourteenDaysDecrement} size={15} style={{marginRight: '10px'}}/><MdKeyboardArrowLeft onClick={sevenDaysDecrement} />{date.toDateString()}<MdKeyboardArrowRight onClick={sevenDaysIncrement} /><AiOutlineDoubleRight onClick={fourteenDaysIncrement}  size={15} style={{marginLeft: '10px'}} /></span>
          </Col>
          <Col className={styles.dates}>
            <Row className={styles.dateCards}>
              {datesToShow.map((val,i)=>{
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
              <button className={`${styles.buttonHover} ${styles.button} `}>All Rates & Availablity<span><MdOutlineArrowDropDown size={22} style={{marginBottom: '2px'}}/></span></button>
              <button className={styles.button}><FaBed style={{marginRight: '8px',marginBottom: '2px'}} size={15} />All Room Types<MdOutlineArrowDropDown size={22} style={{marginLeft: '2px',marginBottom: '2px'}}  /></button>
              <button className={styles.button}><BsFillTagFill style={{marginRight: '8px',marginBottom: '2px'}}/>All Rates Plans<MdOutlineArrowDropDown size={22}  style={{marginLeft: '2px',marginBottom: '4px'}} /></button>
              <div className={styles.inputItem}><span><BiSearch size={15} style={{marginBottom: '1px'}}/></span><input placeholder='Search room Rates'/></div>
              <span>Clear all filters</span>
            </Col>
            <Col className={styles.rightlinkText}>
              <div className={styles.linkText}>
                <GoTriangleRight size={20} style={{marginBottom : '3px'}} /><span>Quick Tour - Inventory Grid</span>
              </div>
            </Col>
          </Row>
      </div>
      {Object.values(roomTypes).map((val,index)=>(
    <div key={index}>
      <div className={styles.item}>
        <Row className={styles.heading}>
          <Col className={styles.Icon}>
            <FaBed size={18} style={{marginTop: '5px'}}/>
          </Col>
          <Col className={styles.leftSection}>
            <span>{val.name}</span>
            <AiFillThunderbolt size={15} style={{marginTop: '5px', color: '#2494d1'}}/>
          </Col>
          <Col className={styles.midSection}>
            Avail
          </Col>
          <Col className={styles.rightSection}>
            <Row className={styles.data}>
            {val.name == 'Deluxe Room'?
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
            }): ''}
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
          {DeluxeRoom[0].roomRatePlans.map((val,i)=>{
            return (
              <>
                <Col className={styles.Icon}>
          
                </Col>
                <Col className={styles.leftSection}>
                  {val.name}
                  <AiFillThunderbolt size={15} style={{marginTop: '5px', color: '#2494d1'}}/>
                </Col>
                <Col className={styles.midSection}>
                  Rates
                </Col>
                <Col className={styles.rightSection}>
                  <Row className={styles.data}>
                  {val.name == 'Deluxe Room'?
                  DeluxeRoom.map((val,i)=>{
                    return (<Col key={i} className={styles.col} >
                      {val.price}
                    </Col>)
                  }): val.name == 'Supreme Room'? SupremeRoom.map((val,i)=>{
                    return (<Col key={i} className={styles.col} >
                      {val.price}
                    </Col>)
                  }) : val.name == 'Classic Room'? ClassicRoom.map((val,i)=>{
                    return (<Col key={i} className={styles.col} >
                      {val.price}
                    </Col>)
                  }): ''}
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
          })}
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTY5OTI5MjksImV4cCI6MTY1NzQyNDkyOX0.kmoXtkq3kmuHaiFFzgpB23FVGMu1qZDEgIwc3-VCAc4',
        'Content-Type': 'application/x-www-form-urlencoded',
        'APP_ID': 'BOOKONE_WEB_APP'
      }
    })
    const properties = await propertiesResponse.json();

  const propertyResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=495', {
    method: 'GET',
      headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTY5OTI5MjksImV4cCI6MTY1NzQyNDkyOX0.kmoXtkq3kmuHaiFFzgpB23FVGMu1qZDEgIwc3-VCAc4',
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
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTY5OTI5MjksImV4cCI6MTY1NzQyNDkyOX0.kmoXtkq3kmuHaiFFzgpB23FVGMu1qZDEgIwc3-VCAc4',
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
