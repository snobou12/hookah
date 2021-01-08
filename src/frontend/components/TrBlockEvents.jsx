import React from 'react';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { deleteIdEventItems, editorIdEventItems } from '../redux/actions/serverMethods';
import Fade from '@material-ui/core/Fade';
import Button from 'react-bootstrap/Button';
import '../css/TrBlock.css';
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
    height: '680px',
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
function TrBlockEvents({ id, name, phone, email, description }) {
  const [nameUser, setNameUser] = React.useState(name);
  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const [phoneUser, setPhoneUser] = React.useState(phone);
  const handleChangePhoneUser = (event) => {
    setPhoneUser(event.target.value);
  };

  const [emailUser, setEmailUser] = React.useState(email);
  const handleChangeEmailUser = (event) => {
    setEmailUser(event.target.value);
  };

  const [descriptionUser, setDescriptionUser] = React.useState(description);
  const handleChangeDescriptionUser = (event) => {
    setDescriptionUser(event.target.value);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setNameUser(name);
    setPhoneUser(phone);
    setEmailUser(email);
    setDescriptionUser(description);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  const delIdItem = (ids) => {
    dispatch(deleteIdEventItems(ids));
    window.location.reload();
  };

  const editIdItem = (ids) => {
    let info = JSON.stringify({
      name: nameUser,
      phone: phoneUser,
      email: emailUser,
      description: descriptionUser,
    });

    dispatch(editorIdEventItems(ids, info));
  };
  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Редактирование # {id}</h2>

              <div className="blockAll">
                <div className="redactor_item">
                  <label>
                    Имя:
                    <input
                      value={nameUser}
                      onChange={handleChangeNameUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    Телефон:
                    <input
                      value={phoneUser}
                      onChange={handleChangePhoneUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    E-мейл
                    <input
                      value={emailUser}
                      onChange={handleChangeEmailUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>

                <div className="redactor_item">
                  <label>
                    Коммент:
                    <input
                      value={descriptionUser}
                      onChange={handleChangeDescriptionUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
              </div>

              <div className="btn_priceInfo">
                <button onClick={() => editIdItem(id)} className="btn2">
                  Сохранить
                </button>
                <button onClick={handleClose} className="btn2">
                  Отменить
                </button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{description}</td>
        <td>
          <Button onClick={handleOpen} variant="dark">
            Изменить
          </Button>
        </td>
        <td>
          <Button onClick={() => delIdItem(id)} variant="dark">
            Удалить
          </Button>
        </td>
        <td></td>
      </tr>
    </>
  );
}

TrBlockEvents.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  comment: PropTypes.string,
};
export default TrBlockEvents;
