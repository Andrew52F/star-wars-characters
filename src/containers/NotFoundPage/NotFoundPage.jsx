import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import styles from './NotFoundPage.module.css';
import cn from 'classnames';

const NotFoundPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <h1 className={cn(
        styles.message,
        styles.large
      )}>404</h1>
      <p className={styles.text}>{t('errors.noMatchUrl')} <u>{location.pathname}</u></p>
    </>
  )
}
export default NotFoundPage;