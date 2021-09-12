import React, { Component } from 'react';
 import { Table ,Image} from 'react-bootstrap';  
 class Location extends Component {

    render() {
        return (
            <>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>City Name</th>
      <th>Longitude </th>
      <th>Latitude </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>{this.props.city_name}</td>
      <td>{this.props.lon}</td>
      <td>{this.props.lat}</td>
    </tr>
      </tbody>
</Table>
<Image src={this.props.imgsrc} fluid />
                
            </>
        )
    }
}

export default Location
