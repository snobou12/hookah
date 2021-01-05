import React from 'react';

import { setMenuItem } from '../redux/actions/headerMenu';
import { fetchInfoAdmin } from '../redux/actions/serverMethods';
import { useDispatch } from 'react-redux';
function AboutUsPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(0));
    dispatch(fetchInfoAdmin());
  }, []);
  return <div className="wrapperAboutUs">ABOUT US CONTENT</div>;
}

export default AboutUsPage;
