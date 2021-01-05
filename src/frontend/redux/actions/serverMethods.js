import axios from 'axios';

export const postInfo = (data) => () => {
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

export const fetchInfoAdmin = () => (dispatch) => {
  axios
    .get('http://localhost:8080/api/table/info')
    .then(({ data }) => {
      dispatch(setAllInfoFromServer(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setAllInfoFromServer = (items) => ({
  type: 'SET_ALL_INFO',
  payload: items,
});

export const deleteIdItem = (id) => () => {
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
export const setAuth = (bool) => ({
  type: 'SET_AUTH',
  payload: bool,
});
