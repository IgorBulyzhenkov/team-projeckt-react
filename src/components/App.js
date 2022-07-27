import { Routes, Route } from 'react-router-dom';
import Balance from './Balance';
import ReportLink from './ReportLink';

export const App = () => {
  return (
    <div>
      <ReportLink />
      <Balance />
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
