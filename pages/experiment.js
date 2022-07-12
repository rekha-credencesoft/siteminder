import React from "react";
import styles from "../styles/experiment.module.css";
import { Row, Col } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Experiment = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.leftArrow}>
          <MdArrowLeft />
        </Col>
        <Col className={styles.columnDate}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              backgroundColor: "white",
              color: "#9acc54",
              padding: "5px 20px",
              borderRadius: "5px",
              margin: "8px 0px",
            }}
          >
            <span>Mon</span>
            <span>11</span>
            <span>Jul</span>
          </div>
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
    </div>
  );
};

export default Experiment;
