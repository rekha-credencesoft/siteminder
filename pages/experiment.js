import React from "react";
import styles from "../styles/experiment.module.css";
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Link from "next/link";
import {BsInfoCircle} from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Experiment = () => {
  return (
    <div className={styles.container}>
       <Row>
        <Col className={styles.leftArrow}>
          <MdArrowLeft />
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.columnDate}>
          <span>Mon</span>
          <span>11</span>
          <span>Jul</span>
        </Col>
        <Col className={styles.rightArrow}>
          <MdArrowRight />
        </Col>
      </Row>
        <Row>
          <Col  className={styles.leftArrow2}>
            <Row>
              <Col className={styles.col1}><img src="https://homesweb.staah.net/imagelibrary/medium_1641366252_3585_SAG_0727-Edit.jpg" alt="" className={styles.image} /></Col>
              <Col className={styles.col2}>
                <span className={styles.text}>Deluxe Room, King/Twin bed,...</span>
                <span className={styles.text}><Link href="/">More Info</Link></span>
              </Col>
              <Col className={styles.col3}><BsInfoCircle /></Col>
            </Row>
          </Col>
          <Col className={styles.column}>
            <span><input type = "checkbox" disabled /> </span>
            <span>SOLD</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox" disabled /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox" disabled /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
           <Col className={styles.column}>
            <span><input type = "checkbox"  /> </span>
            <span>11</span>
          </Col>
          <Col className={styles.rightArrow2}>
            <button className={styles.btn}>Book Now</button>
          </Col>
        </Row>
        {/* <Row>
        <Col  className={styles.leftArrow}>
          <Row>
          <Col className={styles.col}><img src="https://homesweb.staah.net/imagelibrary/medium_1641366252_3585_SAG_0727-Edit.jpg" alt="" style={{height:"100px",width:"120px"}} /></Col>
          <Col style={{textAlign:"left"}}>Deluxe Room, King/Twin bed,... <br /> <Link href="/">More Info</Link></Col>
          <Col><BsInfoCircle /></Col>
          </Row>
        </Col>
        
          <Col></Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
        </Row> */}
    </div>
  );
};

export default Experiment;
