import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import { postInfoComp } from '../redux/actions/serverMethods';
import Fade from '@material-ui/core/Fade';
import { Container, Row, Col } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  paper: {
    borderRadius: '10px',

    backgroundPosition: 'center',
    backgroundColor: ' white;',
    border: '2px solid #000',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(0, 0, 0),
    width: '530px',
    height: '300px',
    ['@media (max-width:767px)']: { height: '480px' },
  },
  imgClose: {
    float: 'right',
    margin: 30,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  formControl: {
    width: 193,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function ButtonClientAddComp() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const addItemToComp = () => {
    if (nameUserAdd != '') {
      let info = JSON.stringify({
        name: nameUserAdd,
        phone: phoneUserAdd,
        points: pointsUserAdd,
      });
      let token = localStorage.getItem('token');
      dispatch(postInfoComp(info, token));
      window.location.reload();
    } else {
      alert('Введите хотя-бы имя');
    }
  };
  const [nameUserAdd, setNameUserAdd] = React.useState('');
  const handleChangeNameUserAdd = (event) => {
    setNameUserAdd(event.target.value);
  };

  const [phoneUserAdd, setPhoneUserAdd] = React.useState('');
  const handleChangePhoneUserAdd = (event) => {
    setPhoneUserAdd(event.target.value);
  };

  const [pointsUserAdd, setPointsUserAdd] = React.useState('');
  const handleChangePointsUserAdd = (event) => {
    setPointsUserAdd(event.target.value);
  };
  return (
    <div>
      <Button onClick={handleOpenAdd} variant="dark">
        Добавить клиента
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openAdd}
        onClose={handleCloseAdd}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={openAdd}>
          <div className={classes.paper}>
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <h2 id="transition-modal-title">Новый клиент по конкурсу</h2>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">Имя</Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <div className="redactor_item">
                    <input
                      value={nameUserAdd}
                      onChange={handleChangeNameUserAdd}
                      type="text"
                      name="name"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">Телефон</Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <div className="redactor_item">
                    <input
                      value={phoneUserAdd}
                      onChange={handleChangePhoneUserAdd}
                      type="text"
                      name="name"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">Очки</Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <div className="redactor_item">
                    <input
                      value={pointsUserAdd}
                      onChange={handleChangePointsUserAdd}
                      type="text"
                      name="name"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col className="text-center">
                  <Button onClick={addItemToComp} variant="dark">
                    Сохранить
                  </Button>
                </Col>
                <Col className="text-center">
                  <Button onClick={handleCloseAdd} variant="dark">
                    Отменить
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ButtonClientAddComp;
