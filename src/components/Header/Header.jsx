import { useEffect, useState } from "react";
import { NavLink }  from "react-router-dom";
import { useTranslation } from "react-i18next";
import routes from '@routes/routesConfig.js';
import Favorite from '@components/Favorite';
import UiSelect from '@components/UI/UiSelect';
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
  const { t, i18n} = useTranslation();
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
      <img className={styles.logo} src={icon} alt={t('logoAlt')} />
      <ul className={styles.list__container}>
        <li><NavLink to={routes.home}>{t('navLinks.home')}</NavLink></li>
        <li><NavLink to={`${routes.people}?page=1`}>{t('navLinks.people')}</NavLink></li>
        <li><NavLink to={routes.search}>{t('navLinks.search')}</NavLink></li>
        <li><NavLink to={routes.notFound}>{t('navLinks.notFound')}</NavLink></li>
      </ul>

      <div className={styles.icons__container}>
        <UiSelect 
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language} 
          options={Object.keys(i18n.options.resources)} />
      <Favorite />
      </div>
    </div>
  )
}

export default Header;