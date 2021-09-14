import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
 class Weather extends Component {
    render() {
        return (
            <>
           
   <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Date:{this.props.data}</Card.Header>
    <Card.Body>
     <Card.Title>descrption:{this.props.descrption}</Card.Title>
      
    </Card.Body>
  </Card>
                
            </>
        )
    }
}

export default Weather
