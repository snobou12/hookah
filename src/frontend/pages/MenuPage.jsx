import React from 'react';
import { setMenuItem } from '../redux/actions/headerMenu';
import { useDispatch } from 'react-redux';
function MenuPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMenuItem(1));
  }, []);
  return <div className="wrapperMenuPage">МЕНЮ</div>;
}

export default MenuPage;
