import { BrowserRouter, Routes, Route}  from "react-router-dom";
import PeoplePage from '@containers/PeoplePage';
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";

import Header from "@components/Header";

import routes from '@routes/routesConfig.js';
import styles from './App.module.css';

const App = () => {
  console.log('in app')
  return (
    <>
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.people} element={<PeoplePage />} />
          <Route path={routes.person} element={<PersonPage />} />
          <Route path={routes.notFound} element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>

  )
}

export default App;
 