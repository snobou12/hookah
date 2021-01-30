import axios from 'axios';

// export const postAuthInfo = (info, token) => () => {
//   axios
//     .post('http://localhost:3001/tables', info, {
//       headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
//     })
//     .then((response) => {
//       setTokenFromServer(response);
//     })
//     .catch((error) => {
//       setTokenFromServer('kek');
//     });
// };

export const postInfoTable = (data) => () => {
  axios
    .post('https://cosanostra-ls.herokuapp.com/api/table/create', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postInfoEvent = (data) => () => {
  axios
    .post('https://cosanostra-ls.herokuapp.com/api/event/create', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postInfoComp = (data, token) => () => {
  axios
    .post('https://cosanostra-ls.herokuapp.com/api/competition/create', data, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchInfoTablesAdmin = (token) => (dispatch) => {
  axios
    .get('https://cosanostra-ls.herokuapp.com/api/table/info', {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then(({ data }) => {
      dispatch(setAllInfoFromServer(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchInfoEventsAdmin = (token) => (dispatch) => {
  axios
    .get('https://cosanostra-ls.herokuapp.com/api/event/info', {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })

    .then(({ data }) => {
      dispatch(setEventsInfoFromServer(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchInfoCompAdmin = (token) => (dispatch) => {
  axios
    .get('https://cosanostra-ls.herokuapp.com/api/competition/info', {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })

    .then(({ data }) => {
      dispatch(setCompInfoFromServer(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setAllInfoFromServer = (items) => ({
  type: 'SET_TABLES_INFO',
  payload: items,
});

export const setEventsInfoFromServer = (items) => ({
  type: 'SET_EVENTS_INFO',
  payload: items,
});

export const setCompInfoFromServer = (items) => ({
  type: 'SET_COMP_INFO',
  payload: items,
});

export const setTokenFromServer = (items) => ({
  type: 'SET_TOKEN',
  payload: items,
});

export const deleteIdTableItems = (id, token) => () => {
  axios
    .delete('https://cosanostra-ls.herokuapp.com/api/table/delete/' + id, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
      window.location.reload();
      
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteIdEventItems = (id, token) => () => {
  axios
    .delete('https://cosanostra-ls.herokuapp.com/api/event/delete/' + id, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteIdCompItems = (id, token) => () => {
  axios
    .delete('https://cosanostra-ls.herokuapp.com/api/competition/delete/' + id, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
     window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editorIdTableItem = (id, item, token) => () => {
  axios
    .put('https://cosanostra-ls.herokuapp.com/api/table/update/' + id, item, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
     window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editorIdEventItems = (id, item, token) => () => {
  axios
    .put('https://cosanostra-ls.herokuapp.com/api/event/update/' + id, item, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
     window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editorIdCompItems = (id, item, token) => () => {
  axios
    .put('https://cosanostra-ls.herokuapp.com/api/competition/update/' + id, item, {
      headers: { Authorization: `Basic ${token}`, 'Content-Type': 'application/json' },
    })
    .then((response) => {
     window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setAuth = (bool) => ({
  type: 'SET_AUTH',
  payload: bool,
});
