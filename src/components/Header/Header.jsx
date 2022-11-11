import { useEffect, useState } from "react";
import { NavLink }  from "react-router-dom";
import routes from '@routes/routesConfig.js';
import Favorite from '@components/Favorite';
import {
  THEME_DARK, THEME_LIGHT, THEME_NEUTRAL,
  useTheme,
} from '@context/ThemeProvider';

import sabersImg from './img/light-saber.png';
import deathStarImg from './img/space-station.png';
import droidImg from './img/droid.png';

import styles from './Header.module.css';

const Header = () => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState(null);

  useEffect(() => {
      switch (theme) {
        case THEME_LIGHT:
          setIcon(sabersImg);
          break;
        case THEME_DARK:
          setIcon(deathStarImg);
          break;
        case THEME_NEUTRAL:
          setIcon(droidImg);
          break;
          default: 
          
      }
  },[theme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star wars icon" />
      <ul className={styles.list__container}>
        <li><NavLink to={routes.home}>Home</NavLink></li>
        <li><NavLink to={`${routes.people}?page=1`}>People</NavLink></li>
        <li><NavLink to={routes.search}>Search</NavLink></li>
        <li><NavLink to={routes.notFound}>Not found</NavLink></li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header;