import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import {FaBed} from 'react-icons/fa';
import {AiFillThunderbolt} from 'react-icons/ai';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import {BsFillTagFill} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {GoTriangleRight} from 'react-icons/go'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.buttonGroup}>
          <Row>
            <Col className={styles.buttons}>
              <button className={styles.button}>All Rates & Availablity<span><MdOutlineArrowDropDown /></span></button>
              <button className={styles.button}><FaBed style={{marginRight: '8px',marginBottom: '4px'}} size={15} />All Room Types<MdOutlineArrowDropDown size={18} style={{marginLeft: '2px',marginBottom: '2px'}}  /></button>
              <button className={styles.button}><BsFillTagFill style={{marginRight: '8px',marginBottom: '2px'}}/>All Rates Plans<MdOutlineArrowDropDown size={18}  style={{marginLeft: '2px',marginBottom: '2px'}} /></button>
              <div className={styles.inputItem}><span><BiSearch size={15} style={{marginBottom: '1px'}}/></span><input placeholder='Search room Rates'/></div>
              <span>Clear all filters</span>
            </Col>
            <Col className={styles.rightlinkText}>
              <div className={styles.linkText}>
                <GoTriangleRight /><span>Quick Tour - Inventory Grid</span>
              </div>
            </Col>
          </Row>
        </div>
      <div className={styles.item}>
        <Row className={styles.heading}>
          <Col className={styles.Icon}>
            <FaBed size={18} style={{marginTop: '5px'}}/>
          </Col>
          <Col className={styles.leftSection}>
            <span>Deluxe View</span>
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
      </div>
      <div className={styles.item}>
        <Row className={styles.heading}>
          <Col className={styles.Icon}>
            <FaBed size={18} style={{marginTop: '5px'}}/>
          </Col>
          <Col className={styles.leftSection}>
            <span>Deluxe View</span>
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
      </div>
      <div className={styles.item}>
        <Row className={styles.heading}>
          <Col className={styles.Icon}>
            <FaBed size={18} style={{marginTop: '5px'}}/>
          </Col>
          <Col className={styles.leftSection}>
            <span>Deluxe View</span>
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
      </div>
      </div>
    </div>
  )
}
