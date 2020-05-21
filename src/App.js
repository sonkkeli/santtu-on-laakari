import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SelectorForm from './SelectorForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const App = () => {
  const copyToClipboard = (text) => {
    var fullLink = document.createElement('textarea');
    document.body.appendChild(fullLink);
    fullLink.value = text;
    fullLink.select();
    document.execCommand("copy", false);
    fullLink.remove();
  }

  const copyOnClick = (id) => {
    const copyText = document.getElementById(id).value;
    copyToClipboard(copyText)
  }

  const copyAll = () => {
    var text = ''
    for(var i = 0 ; i < 8 ; i++){
      var val = document.getElementById(`value${i}`).value
      text += val +'\n';
    }
    console.log(text)
    copyToClipboard(text)
  }

  const onChange = (event) => {
    if(event.target.id === 'value0'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value1'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value2'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value3'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value4'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value5'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value6'){
      copyOnClick(event.target.id)
    } else if(event.target.id === 'value7'){
      copyOnClick(event.target.id)
    }
  }

  return (
    <div>
      <Jumbotron className="app">
          <Container>
            <Row>
              <Col><h1 className="title">Santtu on lääkäri ja hirmu tehokas</h1></Col>
            </Row>
            <Row>
              <SelectorForm onChange={onChange} copyOnClick={copyOnClick} copyAll={copyAll}/>
            </Row>
            <Row>
              <br/>
            </Row>
            <Row>
              <Col>
                <span className="activebtn" onClick={copyAll}>
                  Kopioi kaikki <FontAwesomeIcon icon={faClone} />
                </span>
              </Col>
            </Row>            
          </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
