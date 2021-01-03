import React from 'react';

import { setMenuItem } from '../redux/actions/headerMenu';
import { useDispatch } from 'react-redux';
function News() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(2));
  }, []);
  return <div className="wrapperNews">News</div>;
}

export default News;
