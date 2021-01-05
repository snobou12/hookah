import axios from 'axios';

export const postInfo = (data) => () => {
  axios
    .post('http://localhost:8080/api/create ', data, {
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
    .get('http://localhost:8080/api/infoTable')
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setAllInfo = (items) => ({
  type: 'SET_ALL_INFO',
  payload: items,
});
