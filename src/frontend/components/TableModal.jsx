import React from 'react';

import closeIconModal from '../../assets/image/closeDoteModal.png';
import backGImage from '../../assets/image/dark-leather.png';
import { Link } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useDispatch } from 'react-redux';
import { setInfoTable, setInfoEvent } from '../redux/actions/tableReserve';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../css/TableModal.css';
let today = new Date();

let dd = String(today.getDate()).padStart(2, '0');
let dd2 = Number(dd) + 1;
let dd3 = Number(dd) + 2;
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
let today2 = dd2 + '/' + mm + '/' + yyyy;
let today3 = dd3 + '/' + mm + '/' + yyyy;

let re = new RegExp('^.*[^A-zА-яЁё].*$');

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  paper: {
    backgroundImage: `url(${backGImage})`,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(0, 0, 0),
    width: '530px',
    height: '380px',
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

function TableModal({ kind, kindInfo }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('');
  const [time, setTime] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
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
    setData('0');
    setPhone('');
    setName('');
    setLabelPhone('Ваш телефон');
    setLabelName('Ваше имя');
    setTime('17');
    setCheck(false);
  };

  const delAllInfo = (evt) => {
    evt.preventDefault();
    setPhone('');
    setLabelPhone('Ваш телефон');

    setName('');
    setLabelName('Ваше имя');

    setCheck(false);
  };

  const handleChangeDate = (event) => {
    setData(event.target.value);
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
      !check ||
      !checkName ||
      !checkPhone
    ) {
      alert('Введите все данные');
      event.preventDefault();
    } else {
      event.preventDefault();
      const info = {
        nameInfo: name,
        numInfo: phone,
        dataInfo: data,
        timeInfo: time,
        typeInfo: kindInfo,
      };
      if (kind === 'ЗАБРОНИРОВАТЬ СТОЛ') {
        dispatch(setInfoTable(info));
      } else {
        dispatch(setInfoEvent(info));
      }
    }
  };

  return (
    <div>
      <a className="btnMy" onClick={handleOpen}>
        {' '}
        {kind}{' '}
      </a>
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
            <img
              className={classes.imgClose}
              id="btnClose"
              onClick={handleClose}
              src={closeIconModal}
              alt=""
            />
            <h2 id="transition-modal-title">Забронировать {kindInfo}</h2>
            <form className={classes.root} noValidate>
              <div className="blockAll">
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    id="custom-css-standard-input"
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
                      <MenuItem value={0}> {today}</MenuItem>
                      <MenuItem value={1}>{today2}</MenuItem>
                      <MenuItem value={2}>{today3}</MenuItem>
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
                      <MenuItem value={0}>00:00</MenuItem>
                      <MenuItem value={1}>01:00</MenuItem>
                      <MenuItem value={2}>02:00</MenuItem>
                      <MenuItem value={17}>17:00</MenuItem>
                      <MenuItem value={18}>18:00</MenuItem>
                      <MenuItem value={19}>19:00</MenuItem>
                      <MenuItem value={20}>20:00</MenuItem>
                      <MenuItem value={21}>21:00</MenuItem>
                      <MenuItem value={22}>22:00</MenuItem>
                      <MenuItem value={23}>23:00</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div id="checkBox_Confirm">
                <div id="checkBox">
                  <GreenCheckbox onClick={checkChanger} checked={check} />
                  Согласен на обработку персональных данных *
                </div>
                <button onClick={confirmClick} className="btn2">
                  Отправить
                </button>
                <button onClick={delAllInfo} className="btn2">
                  Очиститить данные
                </button>
              </div>
              <Link to="/menu">
                <div className="priceInfo">Все цены в разделе меню *</div>
              </Link>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TableModal;
