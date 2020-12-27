import React from 'react';

import closeIconModal from '../../assets/image/closeDoteModal.png';
import backGImage from '../../assets/image/dark-leather.png';

import { purple } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('');
  const [time, setTime] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [check, setCheck] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData('');
    setPhone('');
    setName('');
    setTime('');
  };

  const handleChangeDate = (event) => {
    setData(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const checkChanger = () => {
    setCheck(!check);
  };
  const confirmClick = (event) => {
    console.log(check);
    if (data === '' || time === '' || phone === '' || name === '' || !check) {
      alert('Введите все данные');
      event.preventDefault();
    } else {
      //Сервер
    }
  };

  return (
    <div>
      <a className="btn" onClick={handleOpen}>
        {' '}
        Забронировать стол{' '}
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
            <h2 id="transition-modal-title">Бронирование столика</h2>
            <form className={classes.root} noValidate>
              <div className="blockAll">
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Ваше имя"
                    onChange={handleChangeName}
                    value={name}
                  />
                </div>
                <div className="item">
                  <CssTextField
                    required
                    className={classes.margin}
                    label="Ваш телефон"
                    id="custom-css-standard-input"
                    value={isNaN(phone) ? '' : phone}
                    onChange={handleChangePhone}
                    onInput={(e) => {
                      e.target.value =
                        '+' + Math.max(0, parseInt(e.target.value)).toString().slice(0, 11);
                    }}
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
                  <GreenCheckbox onClick={checkChanger} checked={check} name="checkedG" />
                  Согласен на обработку персональных данных *
                </div>

                <button onClick={confirmClick} className="btn2">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TableModal;
