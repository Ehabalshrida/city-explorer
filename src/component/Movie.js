import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
export class Movie extends Component {
    render() {
        return (
            <>
             <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>title</th>
      <th>overview</th>
      <th>avgVotes</th>
      <th>totalVotes</th>
      <th>popularity</th>
      <th>releaseDate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{this.props.title}</td>
      <td>{this.props.overview}</td>
      <td>{this.props.avgVotes}</td>
      <td>{this.props.totalVotes}</td>
      <td>{this.props.popularity}</td>
      <td>{this.props.releaseDate}</td>
    </tr>
    
  </tbody>
</Table>  
            </>
        )
    }
}

export default Movie
