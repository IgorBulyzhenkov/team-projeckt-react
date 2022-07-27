import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Test from './test/test';

export const App = () => {
  return (
    <div>
      <HomePage />
      <Test />
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
