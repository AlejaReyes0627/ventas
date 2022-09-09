import React from "react";
import '@fortawesome/fontawesome-free/js/all';
import Clientes from './page/Clientes';
import Home from './page/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Clientes" element={<Clientes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
