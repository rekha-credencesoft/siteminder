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
  // console.log(property);
  const roomTypes = [];
  let room = [];
  let roomDetail = [];
  for (let index = 0; index < properties.length; index++) {
    if (!roomTypes[properties[index].name]) {
      roomTypes[properties[index].name]=JSON.parse(JSON.stringify(properties[index]));
    }
  }
  delete roomTypes['Official  Use'];


  for (let i = 0; i < roomsArray.length; i++) {
    room = roomsArray[i];
    let keys = Object.values(roomTypes);
    for (let k = 0; k < keys.length; k++) {
      // console.log(keys[k].id)
      for (let j = 0; j < room.length; j++) {
        // console.log(room[j].roomId)
            if(room[j].roomId == keys[k].id && room[j].roomName == keys[k].name){
              // console.log(keys[k]);
              roomDetail.push(keys[k])
              keys[k]['roomDetail'] = roomDetail;
            }
          }
          roomDetail = []
        }
      }

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
  
  
  const dates = dateRange(date, lastday(2022, 6));
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
        monthToShow.push('January');
        break;
      case 1:
        monthToShow.push('February');
        break;
      case 2:
        monthToShow.push('March');
        break;
      case 3:
        monthToShow.push('April');
        break;
      case 4:
        monthToShow.push('May');
        break;
        case 5:
          monthToShow.push('June');
          break;
        case 6:
          monthToShow.push('July');
          break;
        case 7:
          monthToShow.push('August');
          break;
        case 8:
          monthToShow.push('September');
          break;
        case 9:
          monthToShow.push('October');
          break;
        case 10:
          monthToShow.push('November');
          break;
        case 11:
          monthToShow.push('December');
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

  datesToShow.splice(14,datesToShow.length);
  // const da = datesToShow.slice(0,7);
  daysToShow.splice(14,daysToShow.length);
  // console.log(datesToShow);

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
            <span><GrRotateLeft size={15} style={{marginRight: '10px'}}/><AiOutlineDoubleLeft size={15} style={{marginRight: '10px'}}/><MdKeyboardArrowLeft/>{date.toDateString()}<MdKeyboardArrowRight /><AiOutlineDoubleRight size={15} style={{marginLeft: '10px'}} /></span>
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
                    JUL
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
        </Row>
        <Row className={styles.content}>
          <Col className={styles.Icon}>
          
          </Col>
          <Col className={styles.leftSection}>
            Rath Yatra Plan (Rath Yatra Special)
            <AiFillThunderbolt size={15} style={{marginTop: '5px', color: '#2494d1'}}/>
          </Col>
          <Col className={styles.midSection}>
            Rates
          </Col>
          <Col className={styles.rightSection}>
            <Row className={styles.data}>
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
