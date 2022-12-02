import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const MovieAdd = ({add}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [title , setTile] = useState("")
  const [description , setDescription] = useState("")
  const [rate , setRate] = useState("")
  const [posterUrl , setPosterUrl] = useState("")

  const handleTitle = (e) => {
    setTile(e.target.value)
  } 
  const handleDescription = (e) => {
    setDescription(e.target.value)
  } 
  const handleRate = (e) => {
    setRate(e.target.value)
  } 
  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value)
  } 

  const handleAdd = () => {
    let newMovie = {title , description , rate , posterUrl }
    add(newMovie)
  }
  
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Movie Title" onChange={(e) => handleTitle(e)}/>
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label>Movie Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Movie Description" onChange={(e) => handleDescription(e)} />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control type="number" placeholder="Enter Movie Rate"onChange={(e) => handleRate(e)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Poster Url</Form.Label>
              <Form.Control type="url" placeholder="Poster Url" onChange={(e) => handlePosterUrl(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => handleAdd()} variant="primary">Add it!</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieAdd;
