import { Routes, Route } from 'react-router-dom';
import Test from './test/test';
import AuthorizationPage from 'pages/AuthorizationPage';
import Header from './Header';
// import ReportPage from 'pages/ReportPage';


export const App = () => {
  return (
    <div>
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
      <Test />
    </div>
  );
};
