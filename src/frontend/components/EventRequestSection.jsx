import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postInfoEvent } from '../redux/actions/serverMethods';

import Button from 'react-bootstrap/Button';
import '../css/EventRequestSection.css';

function EventRequestSection() {
  const dispatch = useDispatch();
  const myRef = React.useRef();

  const [nameUser, setNameUser] = React.useState('');
  const [phoneUser, setPhoneUser] = React.useState('');
  const [emailUser, setEmailUser] = React.useState('');
  const [descriptionUser, setDescriptionUser] = React.useState('');

  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const handleChangePhoneUser = (event) => {
    setPhoneUser(event.target.value);
  };

  const handleChangeEmailUser = (event) => {
    setEmailUser(event.target.value);
  };

  const handleChangeDescriptionUser = (event) => {
    setDescriptionUser(event.target.value);
  };

  const eventRequest = () => {
    if (nameUser !== '' && phoneUser !== '' && emailUser !== '' && descriptionUser !== '') {
      let info = JSON.stringify({
        name: nameUser,
        phone: phoneUser,
        email: emailUser,
        description: descriptionUser,

        // id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        // name: nameUser,
        // phone: phoneUser,
        // email: emailUser,
        // comment: commentUser,
      });
      dispatch(postInfoEvent(info));
    } else {
      alert('Введите данные');
    }
  };

  return (
    <div className="event-request-section-wrapper">
      <Container ref={myRef} d className="pt-5 pb-5">
        <Row>
          <Col className=" text-center pb-5 ">
            <h2 className="topTextRequest">Оставить запрос</h2>
            <hr className="short text-center" />
          </Col>
        </Row>

        <Row>
          <Col md={{ offset: 4 }}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                value={nameUser}
                onChange={handleChangeNameUser}
                style={{ width: '330px' }}
                type="text"
                placeholder="ФИО"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                value={phoneUser}
                onChange={handleChangePhoneUser}
                style={{ width: '330px' }}
                type="text"
                placeholder="Телефон"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                value={emailUser}
                onChange={handleChangeEmailUser}
                style={{ width: '330px' }}
                type="text"
                placeholder="Е-мейл"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                value={descriptionUser}
                onChange={handleChangeDescriptionUser}
                style={{ width: '330px' }}
                type="text"
                placeholder="Расскажите о мероприятии"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className=" text-center pb-5 ">
            <Form.Group>
              <Button onClick={eventRequest} style={{ width: '200px' }} variant="dark">
                <div className="btnRequest">Отправить</div>
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventRequestSection;
