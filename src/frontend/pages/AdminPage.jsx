import React from 'react';
import axios from 'axios';
import '../css/AdminPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuth,
  fetchInfoTablesAdmin,
  fetchInfoEventsAdmin,
  fetchInfoCompAdmin,
  postAuthInfo,
} from '../redux/actions/serverMethods';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Table } from 'react-bootstrap';
import {
  TrBlockTables,
  TrBlockEvents,
  TrBlockComp,
  ButtonClientAddComp,
  ButtonClientAddTables,
  ButtonClientAddEvents,
} from '../components';
import { Button } from 'react-bootstrap';
import { setHeaderItem } from '../redux/actions/headerMenu';

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

function AdminPage() {
  const trueToken = useSelector(({ serverMethods }) => serverMethods.token);
  const itemsTable = useSelector(({ serverMethods }) => serverMethods.itemsTables);
  const itemsEvents = useSelector(({ serverMethods }) => serverMethods.itemsEvents);
  const itemsComp = useSelector(({ serverMethods }) => serverMethods.itemsComp);
  const dispatch = useDispatch();
  const authCheck = useSelector(({ serverMethods }) => serverMethods.isAuth);
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendClick = () => {
    let fullInputs = login + ':' + password;
    let token = btoa(fullInputs);
    let info = JSON.stringify({
      login,
      password,
    });
    // dispatch(postAuthInfo(info, token));

    // localStorage.setItem('token', trueToken);

    axios
      .post('http://localhost:8080/api/login', info, {
        headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
      })
      .then((response) => {
        localStorage.setItem('token', response);
      })
      .catch((error) => {
        localStorage.setItem('token', 'falseToken');
      });
  };

  const logOutClick = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };

  React.useEffect(() => {
    dispatch(setHeaderItem(3));

    if (localStorage.getItem('auth') === 'true') {
      dispatch(setAuth(true));
      dispatch(fetchInfoTablesAdmin());
      dispatch(fetchInfoEventsAdmin());
      dispatch(fetchInfoCompAdmin());
    }
  }, []);
  return (
    <div className="wrapperAdminPage">
      <div className={!authCheck ? 'form-registration' : 'form-registration-none'}>
        <h2 className="text-center">Вход в систему</h2>

        <div className="btxt text-center">
          <CssTextField
            required
            label="Login"
            id="r112s"
            value={login}
            onChange={handleChangeLogin}
          />
        </div>

        <div className="btxt text-center">
          <CssTextField
            required
            label="Password"
            id="r1223s"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="formBtn2">
          <button onClick={sendClick} className="btn2">
            Отправить
          </button>
        </div>
      </div>
      <div className={authCheck ? 'adminContent' : 'adminContent-none'}>
        <div className="text-center">
          <h1 className="topTextInfo">Данные по клиентам</h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr className="tHeader">
              <th width="1%">id</th>
              <th width="8%">Имя</th>
              <th width="5%">Телефон</th>
              <th width="5%">Дата</th>
              <th width="4%">Время</th>
              <th width="3%">Кол.чел</th>
              <th width="20%">Комментарий</th>
              <th width="27%">Редактировать</th>
              <th width="27%">Удалить</th>
            </tr>
          </thead>
          <tbody className="tContent">
            {itemsTable.length != 0 ? (
              itemsTable.map((obj) => <TrBlockTables key={obj.id} {...obj} />)
            ) : (
              <> </>
            )}
          </tbody>
        </Table>
        {itemsTable.length === 0 ? <div className="text-center bold">Пока никого нет</div> : <> </>}
        <div className="adminTools">
          <ButtonClientAddTables />
        </div>
      </div>
      <div className={authCheck ? 'adminContent' : 'adminContent-none'}>
        <div className="text-center">
          <h1 className="topTextInfo">Данные по мероприятиям</h1>
        </div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr className="tHeader">
              <th width="1%">id</th>
              <th width="15%">Имя</th>
              <th width="15%">Телефон</th>
              <th width="21%">Емейл</th>
              <th width="28%">Комментарий</th>
              <th width="10%">Редактировать</th>
              <th width="10%">Удалить</th>
            </tr>
          </thead>
          <tbody className="tContent">
            {itemsEvents.length != 0 ? (
              itemsEvents.map((obj) => <TrBlockEvents key={obj.id} {...obj} />)
            ) : (
              <> </>
            )}
          </tbody>
        </Table>
        {itemsEvents.length === 0 ? (
          <div className="text-center bold">Пока никого нет</div>
        ) : (
          <> </>
        )}
        <div className="adminTools">
          <ButtonClientAddEvents />
        </div>
      </div>
      <div className={authCheck ? 'adminContent' : 'adminContent-none'}>
        <div className="text-center">
          <h1 className="topTextInfo">Данные по конкурсу</h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr className="tHeader">
              <th width="4%">id</th>
              <th width="20%">Имя</th>
              <th width="20%">Телефон</th>
              <th width="26%">Очки</th>
              <th width="15%">Редактировать</th>
              <th width="15%">Удалить</th>
            </tr>
          </thead>
          <tbody className="tContent">
            {itemsComp.length != 0 ? (
              itemsComp.map((obj) => <TrBlockComp key={obj.id} {...obj} />)
            ) : (
              <> </>
            )}
          </tbody>
        </Table>
        {itemsComp.length === 0 ? <div className="text-center bold">Пока никого нет</div> : <> </>}
        <div className="adminTools">
          <ButtonClientAddComp />
        </div>
      </div>{' '}
      <Button onClick={logOutClick} variant="dark">
        Выход из системы
      </Button>
    </div>
  );
}

export default AdminPage;
