import React from 'react'
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';

const MovieFilter = ({inputS , setInput , active , setActive , setStar}) => {

  const starRate = {
    count: 5,
    size: 23,
    value: 0,
    edit: true,
    onChange: (newValue) => {
      setStar(newValue);
    }
  };


  return (
    <div>

    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Movies Roll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <Button onClick={() => setActive(!active)} variant="light">Search by Rate</Button>
        {active ? <ReactStars  {...starRate} /> : null}
        </Nav>
        <Form className="d-flex">
        <Form.Control type="text" placeholder="Enter Movie Title" onChange={(e) => setInput(e.target.value)} value={inputS} />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>







         
         
    </div>
  )
}

export default MovieFilter