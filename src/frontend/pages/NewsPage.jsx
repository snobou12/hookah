import React from 'react';

import { setHeaderItem } from '../redux/actions/headerMenu';
import { useDispatch } from 'react-redux';
function News() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderItem(2));
  }, []);
  return <div className="wrapperNews">news</div>;
}

export default News;
