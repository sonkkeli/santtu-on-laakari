import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import * as vals from './texts'

const SelectorForm = ({ onChange, copyOnClick }) => {
  return (
    <Form onChange={onChange}>
      <Row>
        <Col sm={12} md={6}>
          <Container>
            {vals.values.map((v, index) => {
              if (index % 2 === 0) {
                return (
                  <Row key={index}>
                    <Col>
                      <Form.Group controlId={`value${index}`}>
                        <Form.Label>
                          {v.title}{' '}
                          <FontAwesomeIcon
                            className="activebtn"
                            icon={faClone}
                            onClick={(event) => {
                              event.preventDefault()
                              copyOnClick(`value${index}`)
                            }}
                          />
                        </Form.Label>
                        <Form.Control as="select" custom>
                          {v.options.map((o, ind) => (
                            <option value={o} key={ind}>
                              {o}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                )
              } else {
                return null
              }
            })}
          </Container>
        </Col>
        <Col sm={12} md={6}>
          <Container>
            {vals.values.map((v, index) => {
              if (index % 2 === 1) {
                return (
                  <Row key={index}>
                    <Col>
                      <Form.Group controlId={`value${index}`}>
                        <Form.Label>
                          {v.title}{' '}
                          <FontAwesomeIcon
                            className="activebtn"
                            icon={faClone}
                            onClick={(event) => {
                              event.preventDefault()
                              copyOnClick(`value${index}`)
                            }}
                          />
                        </Form.Label>
                        <Form.Control as="select" custom>
                          {v.options.map((o, ind) => (
                            <option value={o} key={ind}>
                              {o}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                )
              } else {
                return null
              }
            })}
          </Container>
        </Col>
      </Row>
    </Form>
  )
}

export default SelectorForm
