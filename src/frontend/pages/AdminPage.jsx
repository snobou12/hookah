import React from 'react';
import '../css/AdminPage.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendClick = () => {
    console.log(login + '    ' + password);
  };

  return (
    <div className="wrapperAdminPage">
      <div class="form-registration">
        <h2 className="text-center">Вход в систему</h2>

        <div class="btxt text-center">
          <CssTextField
            required
            label="Login"
            id="r112s"
            value={login}
            onChange={handleChangeLogin}
          />
        </div>

        <div class="btxt text-center">
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
    </div>
  );
}

export default AdminPage;
