// ./ 의 위치: frontend/src/
// ../의 위치: frontend/
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/user/login';
import Join from './pages/user/join';
import Pwsearch from './pages/user/pwsearch';
import Mypage from './pages/user/mypage';
import Notice from './pages/board/notice_list';
import axios from 'axios';

axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/join' element={<Join/>} />
      <Route path='/pwsearch' element={<Pwsearch/>} />
      <Route path='/mypage' element={<Mypage/>} />
      <Route path='/notice' element={<Notice />} />
    </Routes>
  );
}


export default App;
