import React, { Component } from 'react';
import { Jumbotron, Button,Form,FormGroup,Label,Input } from 'reactstrap';

class InputForm extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1 className="display-3">Wassup!</h1>
        <p className="lead">This is a simple translator</p>
        <hr className="my-2" />
        <Form>
            <Input type="textarea" name="text" id="exampleText" />
            <br></br>
            <p className="lead">
              <Button color="primary">Translate</Button>
            </p>
        </Form>
      </Jumbotron>
    </div>
    )
  }
}
export default  InputForm;