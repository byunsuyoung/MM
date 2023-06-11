// ./ 의 위치: frontend/src/
// ../의 위치: frontend/
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
import Notice from './pages/board/notice';

const App: React.FC = () => {
  return (
    <Routes> 
      <Route path='/' element={<Notice />} />
    </Routes>
  );
}


export default App;
