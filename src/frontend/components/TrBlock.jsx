import React from 'react';
import '../css/TrBlock.css';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { deleteIdItem, editorIdItem } from '../redux/actions/serverMethods';
import Fade from '@material-ui/core/Fade';
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
function TrBlock({ id, name, phone, data, clock, count, comment }) {
  const [nameUser, setNameUser] = React.useState(name);
  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const [phoneUser, setPhoneUser] = React.useState(phone);
  const handleChangePhoneUser = (event) => {
    setPhoneUser(event.target.value);
  };

  const [dataUser, setDataUser] = React.useState(data);
  const handleChangeDataUser = (event) => {
    setDataUser(event.target.value);
  };

  const [clockUser, setClockUser] = React.useState(clock);
  const handleChangeClockUser = (event) => {
    setClockUser(event.target.value);
  };

  const [countUser, setCountUser] = React.useState(count);
  const handleChangeCountUser = (event) => {
    setCountUser(event.target.value);
  };

  const [commentUser, setCommentUser] = React.useState(comment);
  const handleChangeCommentUser = (event) => {
    setCommentUser(event.target.value);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setNameUser(name);
    setPhoneUser(phone);
    setDataUser(data);
    setClockUser(clock);
    setCountUser(count);
    setCommentUser(comment);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  const delIdItem = (ids) => {
    dispatch(deleteIdItem(ids));
    window.location.reload();
  };

  const editIdItem = (ids) => {
    let info = JSON.stringify({
      nameInfo: nameUser,
      numInfo: phoneUser,
      dataInfo: dataUser,
      timeInfo: clockUser,
      countInfo: countUser,
      commentInfo: commentUser,
    });
    dispatch(editorIdItem(ids, info));
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
                    Дата:
                    <input
                      value={dataUser}
                      onChange={handleChangeDataUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    Время:
                    <input
                      value={clockUser}
                      onChange={handleChangeClockUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    Кол.чел:
                    <input
                      value={countUser}
                      onChange={handleChangeCountUser}
                      type="text"
                      name="name"
                    />
                  </label>
                </div>
                <div className="redactor_item">
                  <label>
                    Коммент:
                    <input
                      value={commentUser}
                      onChange={handleChangeCommentUser}
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
        <td>{data}</td>
        <td>{clock}</td>
        <td>{count}</td>
        <td>{comment}</td>
        <td>
          <button onClick={handleOpen}>edit </button>
        </td>
        <td>
          <button onClick={() => delIdItem(id)}>X </button>
        </td>
      </tr>
    </>
  );
}

export default TrBlock;
