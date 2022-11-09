import styles from './LinkBack.module.css';
import { useNavigate } from 'react-router-dom';
import iconBack from './img/arrow-back.svg'

const LinkBack = () => {
  const navigate = useNavigate()
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
        <img className={styles.link__img} src={iconBack} alt="go back" />
        <span>Go back</span>
      </a>
    </>
  )
}

export default LinkBack; 