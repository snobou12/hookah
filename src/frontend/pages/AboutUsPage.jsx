import React from 'react';

import { setMenuItem } from '../redux/actions/headerMenu';

import { useDispatch } from 'react-redux';
import { TopImg } from '../components';
function AboutUsPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(0));
  }, []);
  return <div className="wrapperAboutUs">news</div>;
}

export default AboutUsPage;
