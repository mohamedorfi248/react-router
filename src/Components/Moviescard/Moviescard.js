import React from 'react'
import {Card,Button} from 'react-bootstrap'
import "./Moviecard.css";
const Moviescard = ({movie}) => {
  return (
    <div className='movie-card'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.rate}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviescard
