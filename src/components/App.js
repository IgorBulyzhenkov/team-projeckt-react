import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Test from './test/test';

export const App = () => {
  return (
    <div>
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
