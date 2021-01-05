import React from 'react';
import '../css/TrBlock.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIdItem } from '../redux/actions/serverMethods';
function TrBlock({ id, name, phone, data, clock, count, comment }) {
  const dispatch = useDispatch();
  const delIdItem = (ids) => {
    dispatch(deleteIdItem(ids));
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{data}</td>
        <td>{clock}</td>
        <td>{count}</td>
        <td>{comment}</td>
        <td>
          <button>edit </button>
        </td>
        <td>
          <button onClick={() => delIdItem(id)}>X </button>
        </td>

        <td> испр</td>
      </tr>
    </>
  );
}

export default TrBlock;
