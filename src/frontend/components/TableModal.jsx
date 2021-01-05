import React from 'react';

import closeIconModal from '../../assets/image/closeDoteModal.png';
import backGImage from '../../assets/image/dark-leather.png';
import { Link } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';
import { postInfo } from '../redux/actions/serverMethods';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoTable, setInfoEvent } from '../redux/actions/tableReserve';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../css/TableModal.css';

let re = new RegExp('^.*[^A-zА-яЁё].*$');

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  paper: {
    borderRadius: '10px',
    backgroundImage: `url(${backGImage})`,
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

const GreenCheckbox = withStyles({
  root: {
    color: purple[400],
    '&$checked': {
      color: purple[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'purple',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'purple',
      },
      '&:hover fieldset': {
        borderColor: 'purple',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
      },
    },
  },
})(TextField);

function TableModal() {
  const dispatch = useDispatch();

  const arrData = useSelector(({ nowData }) => nowData.data);
  const arrTime = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [oopsOpen, setOopsOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [data, setData] = React.useState('0');
  const [time, setTime] = React.useState('17');
  const [comment, setComment] = React.useState('');
  const [count, setCount] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [checkName, setCheckName] = React.useState(false);
  const [labelName, setLabelName] = React.useState('Ваше имя');
  const [checkPhone, setCheckPhone] = React.useState(false);
  const [labelPhone, setLabelPhone] = React.useState('Ваш телефон');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseOops = () => {
    setOopsOpen(false);
  };

  const handleChangeDate = (event) => {
    setData(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };
  const handleChangeCount = (event) => {
    setCount(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangePhone = (event) => {
    if (!isNaN(event.target.value) && event.target.value.length < 11) {
      setPhone(event.target.value);
    }

    if (phone.length < 11) {
      setLabelPhone('Неверный номер');
      setCheckPhone(false);
    } else {
      setLabelPhone('Ваш телефон');
      setCheckPhone(true);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    if (re.test(event.target.value)) {
      setLabelName('Имя только из букв');
      setCheckName(false);
    } else {
      setLabelName('Ваше имя');
      setCheckName(true);
    }
  };

  const checkChanger = () => {
    setCheck(!check);
  };
  const confirmClick = (event) => {
    if (
      data === '' ||
      time === '' ||
      phone === '' ||
      name === '' ||
      count === '' ||
      !check ||
      !checkName
      //  ||
      // !checkPhone
    ) {
      alert('Введите все данные');
      event.preventDefault();
    } else {
      event.preventDefault();
      // const randomId = Math.floor(Math.random());
      let info = JSON.stringify({
        nameInfo: name,
        numInfo: phone,
        dataInfo: data,
        timeInfo: time,
        countInfo: count,
        commentInfo: comment,
        // name: name,
        // id: 1,
        // phone: phone,
        // data: data,
        // clock: time,
        // count: count,
        // comment: comment,
      });

      dispatch(postInfo(info));
    }
  };

  return (
    <div>
      <a className="btnMy" onClick={handleOpen}>
        ЗАБРОНИРОВАТЬ СТОЛ
      </a>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={oopsOpen}
        onClose={handleCloseOops}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={oopsOpen}>
          <div className={classes.paper}>
            {/* <img
              className={classes.imgClose}
              id="btnClose"
              onClick={handleCloseOops}
              src={closeIconModal}
              alt=""
            /> */}
            <h2 id="tableNotAvailable">Столов больше нет</h2>
            <div id="tableNotAvailableText">Заходите позже!</div>
          </div>
        </Fade>
      </Modal>

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
            {/* <Button className={classes.btnCloseModal}>
              {' '}
              <img id="btnClose" onClick={handleClose} src={closeIconModal} alt="" />{' '}
            </Button> */}{' '}
            {/* <img
              className={classes.imgClose}
              id="btnClose"
              onClick={handleClose}
              src={closeIconModal}
              alt=""
            /> */}
            <h2 id="transition-modal-title">Забронировать столик</h2>
            <form className={classes.root} noValidate>
              <div className="blockAll">
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    id="1custom-css-standard-input"
                    label={labelName}
                    onChange={handleChangeName}
                    value={name}
                  />
                </div>
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    label={labelPhone}
                    id="custom-css-standard-input"
                    value={phone}
                    onChange={handleChangePhone}
                  />
                </div>
                <div className="item">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Дата *</InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data}
                      onChange={handleChangeDate}>
                      {arrData &&
                        arrData.map((value, index) => <MenuItem value={index}>{value}</MenuItem>)}
                    </Select>
                  </FormControl>
                </div>
                <div className="item">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Время *</InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={time}
                      onChange={handleChangeTime}>
                      {arrTime &&
                        arrTime.map((value, index) => (
                          <MenuItem value={index + 17}>{value}</MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Человек"
                    onChange={handleChangeCount}
                    value={count}
                  />
                </div>
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Пожелания"
                    onChange={handleChangeComment}
                    value={comment}
                  />
                </div>
              </div>
              <div id="checkBox_Confirm">
                <div id="checkBox">
                  <GreenCheckbox onClick={checkChanger} checked={check} />
                  Согласен на обработку персональных данных *
                </div>
              </div>
              <div className="btn_priceInfo">
                <button onClick={confirmClick} className="btn2">
                  Отправить
                </button>
                <Link to="/menu">
                  <div className="priceInfo">Все цены в разделе меню *</div>
                </Link>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TableModal;
