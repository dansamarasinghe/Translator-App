import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import InputForm from './components/InputForm';
import OutputForm from './components/OutputForm';

function App() {
  return (
    <div className="App">
     <Container>
        
        <Row>
          <Col>
            <InputForm></InputForm>
          </Col>
          <Col>
            <OutputForm></OutputForm>
          </Col>
        </Row>

     </Container>
    </div>
  );
}

export default App;
