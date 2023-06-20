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
/*
    const login = () => {
      const url = BaseUrl + "/user/login"
      axios.post(url, {
          headers: 
          {
              "Content-Type": "application/json"
          },
          body: { email: email, pw: pw }
      })
      .then(function(response) {
          dispatch(set({type: String(response.data.uno), email: email}))
              goHome()
      })
      .catch(function(error) {
          alert('로그인정보를 확인해 주세요')
      })
  };
  */

    return (
        <div className='login'>
          <Box sx={{marginLeft: 10}}>
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
              pw: '',
              submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
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
                    error={Boolean(touched.pw && errors.pw)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.pw}
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
                  {touched.pw && errors.pw && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.pw}
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
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
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

