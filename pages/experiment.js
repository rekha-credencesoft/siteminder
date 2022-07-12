import React from "react";
import styles from "../styles/experiment.module.css";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Experiment = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.topContainer}>
        <Row className={styles.upperRow}>
          <Col className={styles.leftArrow}>
            <MdArrowLeft />
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span>Mon</span>
              <span>11</span>
              <span>Jul</span>
            </div>
          </Col>
          <Col className={styles.rightArrow}>
            <MdArrowRight />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col className={styles.leftArrow2}>
            <Row>
              <Col className={styles.col1}>
                <img
                  src="https://homesweb.staah.net/imagelibrary/medium_1641366252_3585_SAG_0727-Edit.jpg"
                  alt=""
                  className={styles.image}
                />
              </Col>
              <Col className={styles.col2}>
                <span className={styles.text}>
                  Deluxe Room, King/Twin bed,...
                </span>
                <span className={styles.text}>
                  <Link href="/">More Info</Link>
                </span>
              </Col>
              <Col className={styles.col3}>
                <BsInfoCircle />
              </Col>
            </Row>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" disabled />{" "}
            </span>
            <span>SOLD</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" disabled />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" disabled />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.column}>
            <span>
              <input type="checkbox" />{" "}
            </span>
            <span>11</span>
          </Col>
          <Col className={styles.rightArrow2}>
            <button className={styles.btn}>
              <span className={styles.span}>Book Now</span>
            </button>
          </Col>
        </Row>
      </div>
      {/* <div className={styles.bottomContainer}>
        <Row className={styles.topRow}>
          <Col className={styles.roomHeading}>Deluxe Room</Col>
          <Col className={styles.roomAvail}>Avail</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates}>8</Col>
          <Col className={styles.rates2}>9</Col>
        </Row>
      </div> */}
    </div>
  );
};

export default Experiment;
