import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Test from './test/test';
import AuthorizationPage from 'pages/AuthorizationPage';
import Header from './Header';
import ReportPage from 'pages/ReportPage';


export const App = () => {
  return (
    <div>
      <HomePage />
      <ReportPage />
      <Test />
      {/* <ReportPage /> */}
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Header/>
      <AuthorizationPage/>
    </div>
  );
};
