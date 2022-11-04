import { useLocation } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import cn from 'classnames';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <>
      <h1 className={cn(
        styles.message,
        styles.large
      )}>404</h1>
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  )
}
export default NotFoundPage;