import React from 'react';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import logo from './img/mmlogo.png'
import { Stack, Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index'
import { set } from '../reducers/userReducer'

const Header: React.FC = () => {

  return (
    <div className="App-header">
 
  </div>
  );
}

export default Header;