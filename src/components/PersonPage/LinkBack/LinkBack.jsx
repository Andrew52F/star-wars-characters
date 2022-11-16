import styles from './LinkBack.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import iconBack from './img/arrow-back.svg'

const LinkBack = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1)
  }
  return (
    <>
      <a href="#"
        onClick={handleBack}
        className={styles.link}
      >
        <img className={styles.link__img} src={iconBack} alt={t('goBackLink')} />
        <span>{t('goBackLink')}</span>
      </a>
    </>
  )
}

export default LinkBack; 