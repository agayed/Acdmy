import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import AddCourse from '../../components/Admin/AddCourse';

export default function Fullscreen_Modal() {
    const values = [ 'sm-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
    return (
        <div>
            <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
          اضافةدورة جديدة
          
          
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <AddCourse/>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
        </div>
    )
}
