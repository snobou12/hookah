import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteIdCompItems, editorIdCompItems, postInfoComp } from '../redux/actions/serverMethods';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Fade from '@material-ui/core/Fade';
import '../css/TrBlockComp.css';

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
function TrBLockComp({ id, name, phone, points }) {
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const addItemToComp = () => {
    let info = JSON.stringify({
      name: nameUserAdd,
      phone: phoneUserAdd,
      points: pointsUserAdd,
    });

    dispatch(postInfoComp(info));
    window.location.reload();
  };

  const [nameUser, setNameUser] = React.useState(name);
  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const [phoneUser, setPhoneUser] = React.useState(phone);
  const handleChangePhoneUser = (event) => {
    setPhoneUser(event.target.value);
  };

  const [pointsUser, setPointsUser] = React.useState(points);
  const handleChangePointsUser = (event) => {
    setPointsUser(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////
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

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    setNameUser(name);
    setPhoneUser(phone);
    setPointsUser(points);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const delIdItem = (ids) => {
    dispatch(deleteIdCompItems(ids));
    window.location.reload();
  };

  const editIdItem = (ids) => {
    let info = JSON.stringify({
      name: nameUser,
      phone: phoneUser,
      points: pointsUser,
    });

    dispatch(editorIdCompItems(ids, info));
    window.location.reload();
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
                    Очки:
                    <input
                      value={pointsUser}
                      onChange={handleChangePointsUser}
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openAdd}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={openAdd}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Добавление клиента</h2>

              <div className="blockAll">
                <div className="redactor_item">
                  <label>
                    Имя:
                    <input
                      value={nameUserAdd}
                      onChange={handleChangeNameUserAdd}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    Телефон:
                    <input
                      value={phoneUserAdd}
                      onChange={handleChangePhoneUserAdd}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    Очки:
                    <input
                      value={pointsUserAdd}
                      onChange={handleChangePointsUserAdd}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
              </div>

              <div className="btn_priceInfo">
                <button onClick={addItemToComp} className="btn2">
                  Сохранить
                </button>
                <button onClick={handleCloseAdd} className="btn2">
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
        <td>{points}</td>
        <td>
          <Button onClick={handleOpen} variant="dark">
            Изменить
          </Button>
        </td>
        <td>
          <Button
            onClick={() => {
              delIdItem(id);
            }}
            variant="dark">
            Удалить
          </Button>
        </td>
      </tr>
      <Button onClick={handleOpenAdd} variant="dark">
        Добавить клиента
      </Button>
    </>
  );
}

export default TrBLockComp;
