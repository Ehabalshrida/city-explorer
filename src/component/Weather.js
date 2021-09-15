import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
 class Weather extends Component {
    render() {
        return (
            <>
          <Col>
   <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Date:{this.props.date}</Card.Header>
    <Card.Body>
     <Card.Title>descrption:{this.props.description}</Card.Title>
      
    </Card.Body>
  </Card>
  </Col>     
            </>
        )
    }
}

export default Weather
