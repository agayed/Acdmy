import React, { useEffect, useState } from 'react'
import { Fade ,Button, Row, Col} from 'react-bootstrap';
import Editor from '../Editor';
import JsonData from './data.json'

export default function Fades(props) {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  
    return (
        <div class="M">
          <Row>
            <Col>
             <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="eexample-fade-text"
        aria-expanded={open}
      >
        معلومات عنا
      </Button>
      <Fade in={open}>
        <div id="example-fade-text div1">
          <h3>
                   نحن فريق تعليمى على مستوى الوطن العربى نهتم بكل جديد فى مجالات المعرفة ،وندعم كل الأفكارة الجديدة ونشجعها،ولازال الطريق أمامنا طويلا
 
          </h3>
        </div>
      </Fade>
    </>

            </Col>
            <Col>
    <Button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-fade-text"
        aria-expanded={open1}
      >
        أهدافنا
      </Button>
      <Fade in={open1}>
        <div id="example-fade-text">
<ul>
  <li>{JsonData.About.Why[0]}</li>
  <li>{JsonData.About.Why[1]}</li>
  <li>{JsonData.About.Why[2]}</li>
  <li>{JsonData.About.Why[3]}</li>
  <li>{JsonData.About.Why[4]}</li>
  <li>{JsonData.About.Why[5]}</li>
  <li>{JsonData.About.Why[6]}</li>
  <li>{JsonData.About.Why[7]}</li>
</ul>
        </div></Fade>
            </Col>

           
    <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-fade-text"
        aria-expanded={open2}
      >
       كتابة موضوع جديد
      </Button>
      <Fade in={open2}>
        <div id="example-fade-text">
<Editor/>

        </div></Fade>
            

          </Row>

      

        </div>
    )
}
