import React from 'react';
import '../App.css';
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, Stack, InputBase, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { set } from '../reducers/userReducer';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../pages/img/logo.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header: React.FC = () => {

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  };

  const currentUser = useSelector((state: RootState) => state.userReducer.type);
  const dispatch = useDispatch();

  const goLogin = () => {
    navigate('/login')
  };

  const doLogOut = () => {
    dispatch(set({type: '', email: ''}));
    goHome()
  };

  const goMypage = () => {
    navigate('mypage')
  };

  const LoginButton = () => {
    if(currentUser == ''){
      return <Button variant="text" onClick={() => { goLogin() }}>LogIn</Button>
    }
    else {
      return <Button variant="text" onClick={() => { doLogOut() }}>LogOut</Button>
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <header className="App-header">
      <Stack direction={{ xs: 'column', sm: 'row' }}
             spacing={{ xs: 2, sm: 4, md: 6 }}>
      <div className='App-header-logo'>
      <Box
        component="img"
        sx={{ height: 50, pl:5 }}
        src={logo}
        onClick={() => { goHome() }}
       />
      </div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper> 
        <StyledInputBase
          sx={{paddingTop: 1}}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <div className='App-header-profile-icons'>
      <Box sx={{ flexGrow: 1 }} />
       <Box sx={{ paddingLeft: 60 }}>
        <IconButton size="large" onClick={() => { goMypage() }}>
         <PersonAddIcon fontSize="inherit"/>
        </IconButton>
        <LoginButton/>
        </Box>
      </div>
        </Stack>
    </header>
    </Box>
  );
}

export default Header;