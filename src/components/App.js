import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Test from './test/test';
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
      <Container>
        <Test />
      </Container>
    </div>
  );
};
