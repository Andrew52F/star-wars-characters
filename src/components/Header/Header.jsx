import { NavLink }  from "react-router-dom";
import routes from '@routes/routesConfig.js';
import Favorite from '@components/Favorite';


import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li><NavLink to={routes.home}>Home</NavLink></li>
        <li><NavLink to={`${routes.people}?page=1`}>People</NavLink></li>
        <li><NavLink to={routes.notFound}>Not found</NavLink></li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header;