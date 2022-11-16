import { useTranslation } from 'react-i18next';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  const { t } = useTranslation();
  return (
    <>
    <p className={styles.text}>
      {t('errors.fetchMessage')}
    </p>
    </>
  )
}

export default ErrorMessage;