import { useState, useEffect } from 'react';
import styles from './UiLoader.module.css';
import loaderBlue from './img/loader-blue.svg';
import loaderDark from './img/loader-dark.svg';
import loaderLight from './img/loader-light.svg';
import PropTypes from 'prop-types';
import cn from 'classnames'


const UiLoader = ({shadow = true, theme='light', classes}) => {
  const [loader, setLoader] = useState(null);
  useEffect(() => {
    switch(theme) {
      case 'light':
        setLoader(loaderLight);
        break;
      case 'dark':
        setLoader(loaderDark);
        break;
      case 'blue':
        setLoader(loaderBlue)
        break;
      default:
        console.error('Loader theme error')
    }
  })
  return (
    <>
    <img src={loader} alt='' className={cn(styles.loader, shadow && styles.shadow, classes)} />
    </>
  )
}
UiLoader.propTypes = {
  theme: PropTypes.string,
  classes: PropTypes.string,
  shadow: PropTypes.bool,
}
export default UiLoader;