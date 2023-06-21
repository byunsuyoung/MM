// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from '../user/auth-forms/FirebaseSocial';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../../util/axiosApi';
import axios from 'axios';
import { set } from '../../reducers/userReducer';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box
} from '@mui/material';
import { access } from 'fs';

const Login: React.FC = () => {

    const [checked, setChecked] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/')
    };
    const goJoin = () => {
      navigate('/join')
    };

    const goPwsearch = () => {
      navigate('/pwsearch')
    };

    const goLogin = () => {
      const url = BaseUrl + "/user/login/normal/"
      axios.post(url, 
        {
          headers: { withCredentials: true },
          body: { email: '', password: '' }
      })
      .then(response => {
        const {accessToken} = response.data;
        axios.defaults.headers.common['Authorization'] = 'Bearer ${accessToken}';
        goHome()
      }).catch(error => {
        alert('로그인정보를 확인해 주세요')
      });
  };
  
    return (
        <div className='login'>
          <Box sx={{marginLeft: 5}}>
          <Grid container spacing={3}>
           <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
             <Typography variant="h3">로그인</Typography>
             <Typography onClick={() => { goJoin() }} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              아직 회윈이 아니신가요?
             </Typography>
           </Stack>
          </Grid>
          <Grid item xs={12}>
            <Formik
              initialValues={{
              email: '',
              password: '',
              submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, '이메일 형식에 맞지 않습니다. ').max(255).required('이메일을 입력해 주세요.'),
          password: Yup.string().max(255).required('비밀번호를 입력해 주세요.')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Keep me sign in</Typography>}
                  />
                  <Typography variant="h6" onClick={() => { goPwsearch() }} color="text.primary">
                    Forgot Password?
                  </Typography>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                  <Button onClick={() => {goLogin()}} disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Login
                  </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> Login with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
          </Grid>
         </Grid>
    </Box>
        </div>
    );
}

export default Login;

