import React from 'react';
import '../css/AdminPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuth,
  fetchInfoTablesAdmin,
  fetchInfoEventsAdmin,
} from '../redux/actions/serverMethods';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Table } from 'react-bootstrap';
import { TrBlock, TrBlockEvents } from '../components';
import { Button } from 'react-bootstrap';
import { setMenuItem } from '../redux/actions/headerMenu';

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
  const itemsTable = useSelector(({ serverMethods }) => serverMethods.itemsTables);
  const itemsEvents = useSelector(({ serverMethods }) => serverMethods.itemsEvents);
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
    // if (login === '123' && password === '321') {
    //   dispatch(setAuth(true));
    //   dispatch(fetchInfoAdmin());
    // } else {
    //   dispatch(setAuth(false));
    // }

    localStorage.setItem('auth', true);
    window.location.reload();
  };

  const logOutClick = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };

  React.useEffect(() => {
    dispatch(setMenuItem(3));

    if (localStorage.getItem('auth') === 'true') {
      dispatch(setAuth(true));
      dispatch(fetchInfoTablesAdmin());
      dispatch(fetchInfoEventsAdmin());
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
              <th width="24%">Редактировать</th>
              <th width="24%">Удалить</th>
              <th width="6%">Done</th>
            </tr>
          </thead>
          <tbody className="tContent">
            {itemsTable.length != 0 ? (
              itemsTable.map((obj) => <TrBlock key={obj.id} {...obj} />)
            ) : (
              <> </>
            )}
          </tbody>
        </Table>
        {itemsTable.length === 0 ? <div className="text-center bold">Пока никого нет</div> : <> </>}
        <div className="adminTools">
          <Button variant="dark">Добавить клиента</Button>
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
              <th width="8%">Имя</th>
              <th width="5%">Телефон</th>
              <th width="12%">Емейл</th>
              <th width="20%">Комментарий</th>
              <th width="24%">Редактировать</th>
              <th width="24%">Удалить</th>
              <th width="6%">Done</th>
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
          <Button variant="dark">Добавить клиента</Button>
        </div>
        <Button onClick={logOutClick} variant="dark">
          Выход из системы
        </Button>
      </div>
    </div>
  );
}

export default AdminPage;
