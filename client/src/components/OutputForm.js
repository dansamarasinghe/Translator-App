import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';


export default class OutputForm extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1 className="display-3">Output</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        
      </Jumbotron>
    </div>
    )
  }
}
