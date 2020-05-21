import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SelectorForm from './SelectorForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import './App.css'

const App = () => {
  const copyToClipboard = (text) => {
    var textareaelem = document.createElement('textarea')
    document.body.appendChild(textareaelem)
    textareaelem.value = text
    textareaelem.select()
    document.execCommand('copy', false)
    textareaelem.remove()
  }

  const copyOnClick = (id) => {
    const copyText = document.getElementById(id).value
    copyToClipboard(copyText)
  }

  const copyAll = () => {
    var text = ''
    for (var i = 0; i < 8; i++) {
      var val = document.getElementById(`value${i}`).value
      text += val + '\n'
    }
    console.log(text)
    copyToClipboard(text)
  }

  const onChange = (event) => {
    copyOnClick(event.target.id)
  }

  return (
    <div>
      <Jumbotron className="app">
        <Container>
          <Row>
            <Col>
              <h1 className="title">Santtu on lääkäri ja hirmu tehokas</h1>
            </Col>
          </Row>
          <Row>
            <SelectorForm
              onChange={onChange}
              copyOnClick={copyOnClick}
              copyAll={copyAll}
            />
          </Row>
          <Row>
            <br />
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
  )
}

export default App
