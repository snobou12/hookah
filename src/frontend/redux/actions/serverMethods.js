import axios from 'axios';

export const postInfoTable = (data) => () => {
  axios
    .post('http://localhost:8080/api/table/create', data, {
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
    .post('http://localhost:8080/api/event/create', data, {
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
    .get('http://localhost:8080/api/table/info')
    .then(({ data }) => {
      dispatch(setAllInfoFromServer(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchInfoEventsAdmin = () => (dispatch) => {
  axios
    .get('http://localhost:8080/api/event/info')
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
    .delete('http://localhost:8080/api/table/delete/' + id, {
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
    .delete('http://localhost:8080/api/event/delete/' + id, {
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
    .put('http://localhost:8080/api/table/update/' + id, item, {
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
    .put('http://localhost:8080/api/event/update/' + id, item, {
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
