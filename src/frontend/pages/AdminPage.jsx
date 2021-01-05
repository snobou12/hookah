import React from 'react';
import '../css/AdminPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, fetchInfoAdmin } from '../redux/actions/serverMethods';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Table } from 'react-bootstrap';
import { TrBlock } from '../components';
import { Button } from 'react-bootstrap';

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
  const items = useSelector(({ serverMethods }) => serverMethods.items);
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
    if (localStorage.getItem('auth') === 'true') {
      dispatch(fetchInfoAdmin());
      dispatch(setAuth(true));
    }
  });
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
            {items.length != 0 ? items.map((obj) => <TrBlock key={obj.id} {...obj} />) : <> </>}
          </tbody>
        </Table>
        {items.length === 0 ? <div className="text-center bold">Пока никого нет</div> : <> </>}
        <div className="adminTools">
          <Button onClick={logOutClick} variant="dark">
            Выход из системы
          </Button>
          <div className="tools">
            <Button variant="dark">Сохранить изменения</Button>
            <Button variant="dark">Отмена</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
