import { Routes, Route} from "react-router-dom";
import React from 'react';
import Container from './component/Container/Container';
import Home from './component/Home/Home';
import Counter from "./component/Counter/Counter";
import Todos from './component/Todos/Todos'


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>

    </Container>
  );
}

export default App;
