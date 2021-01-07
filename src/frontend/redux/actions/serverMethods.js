import axios from 'axios';

export const postInfoTable = (data) => () => {
  axios
    .post('http://localhost:3001/tables', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postInfoEvent = (data) => () => {
  axios
    .post('http://localhost:3001/events', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchInfoTablesAdmin = () => (dispatch) => {
  axios
    .get('http://localhost:3001/tables')
    .then(({ data }) => {
      dispatch(setAllInfoFromServer(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchInfoEventsAdmin = () => (dispatch) => {
  axios
    .get('http://localhost:3001/events')
    .then(({ data }) => {
      dispatch(setEventsInfoFromServer(data));
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

export const deleteIdTableItems = (id) => () => {
  axios
    .delete('http://localhost:3001/tables/' + id, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteIdEventItems = (id) => () => {
  axios
    .delete('http://localhost:3001/events/' + id, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editorIdTableItem = (id, item) => () => {
  axios
    .put('http://localhost:3001/tables/' + id, item, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editorIdEventItems = (id, item) => () => {
  axios
    .put('http://localhost:3001/events/' + id, item, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setAuth = (bool) => ({
  type: 'SET_AUTH',
  payload: bool,
});
