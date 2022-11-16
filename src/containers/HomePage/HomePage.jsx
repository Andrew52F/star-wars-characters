import styles from './HomePage.module.css';
import ChooseSide from '@components/HomePage/ChooseSide';
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className='header__text'>{ t('headerText.choose') }</h1>
      <ChooseSide />
    </>
  )
}

export default HomePage;