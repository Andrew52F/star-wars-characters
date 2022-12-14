import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { setLocalStorage } from '@utils/localStorage';
import styles from './ChooseSide.module.css';
import {
  THEME_DARK, THEME_LIGHT, THEME_NEUTRAL,
  useTheme,
} from '@context/ThemeProvider';
import PropTypes from 'prop-types';

import blueSaber from './img/blue-saber.jpeg';
import redSaber from './img/red-saber.jpeg'
import falcon from './img/falcon.jpg';


const ChooseSideItem = ({img, text, themeName, classes}) => {
  const {setTheme} = useTheme();
  return (
    <div
    className={cn(styles.item, classes)} 
    onClick={() => {
      setTheme(themeName);
      setLocalStorage('theme', {localTheme: themeName})
    }}>
      <span className={styles.item__header}>{text}</span>
      <img className={styles.item__img} src={img} alt={text}/>
    </div>
  )
};

ChooseSideItem.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
}



const ChooseSide = () => {
  const { t } = useTranslation();
  const themesItems = [
    {themeName: THEME_LIGHT, text: t(`chooseSide.${THEME_LIGHT}`) , img: blueSaber, classes: styles.item__light},
    {themeName: THEME_DARK, text: t(`chooseSide.${THEME_DARK}`), img: redSaber, classes: styles.item__dark},
    {themeName: THEME_NEUTRAL, text: t(`chooseSide.${THEME_NEUTRAL}`), img: falcon, classes: styles.item__neutral},
  ]
  return (
    <>
    <div className={styles.container}>
      {themesItems.map(({themeName, text, img, classes}) => (
        <ChooseSideItem themeName={themeName} text={text} img={img} key={themeName} classes={classes} ></ChooseSideItem>
      ))}
    </div>
    </>
  )
}

export default ChooseSide;