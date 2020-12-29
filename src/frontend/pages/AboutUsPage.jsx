import React from 'react';
import '../css/pageCss/AboutUsPage.css';
import { setMenuItem } from '../redux/actions/headerMenu';
import { useDispatch } from 'react-redux';
function AboutUsPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(0));
  }, []);
  return <div className="wrapperAboutUs">ABOUT US CONTENT</div>;
}

export default AboutUsPage;
