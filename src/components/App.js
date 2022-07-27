import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Test from './test/test';
// import ReportPage from 'pages/ReportPage';


export const App = () => {
  return (
    <div>
      <HomePage />
      <Test />
      {/* <ReportPage /> */}
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
};
