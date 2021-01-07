import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosCall } from 'react-icons/io';

import { BsPeopleFill, BsGeoAlt, BsCalendarFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import '../css/EventSection.css';

function EventSection({ smoothToEventSelectorProp }) {
  return (
    <div className="event-section-wrapper">
      <Container className="pt-5 pb-5">
        <Row>
          <Col sm="12" className="topTextEvent text-center  ">
            Ваше важное событие — наша грандиозная работа
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <BsGeoAlt style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-center ">Расположение</h3>

            <div>Историческое место — 5 углов Панорамный вид на самый центр города</div>
          </Col>
          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <BsPeopleFill style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-center ">Вместимость</h3>

            <div>
              Банкет – до 50 человек
              <br /> Фуршет – до 100 человек
            </div>
          </Col>

          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <IoIosCall style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-center ">Контактный номер</h3>

            <div>+7(911)926-60-10</div>
          </Col>
          <Col className="social text-center" sm="3">
            <div className="pb-3 pt-5">
              <BsCalendarFill className="text-danger" style={{ height: '30px', width: '30px' }} />
            </div>

            <h3 className="topTextItem text-danger ">Забронировать</h3>

            <div className="text-danger">
              Оставьте запрос — мы поможем устроить ваше мероприятие
            </div>
            <div className="pt-3">
              <Button onClick={smoothToEventSelectorProp} variant="danger">
                Оставить запрос
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

EventSection.propTypes = {
  smoothToEventSelectorProp: PropTypes.func,
};

export default EventSection;
