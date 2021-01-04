import axios from 'axios';

export const PostInfo = (data) => (dispatch) => {
  axios
    .post('http://localhost:8080/api/create', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setAllInfo = (items) => ({
  type: 'SET_ALL_INFO',
  payload: items,
});
