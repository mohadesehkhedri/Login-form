import React from "react";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import image from "../../assets/img/logo.png"
import slider from "../../assets/img/slider.jpg"
import googleIconSrc from "../../assets/img/google.png"
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';


function LoginForm() {


  return (
    <div className="grid-container" align="center" >

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={slider} alt="" style={{ height: '99vh' }} />
        </Grid>

        <Grid item xs={6}>
          <div className="LoginForm">
            <img className="logo" src={image} alt="logo" width={80} />

            <h1>Hello Again!</h1>

            <span className="sub-title" >
              Aliquam consectetur et tincidunt praesent enim
              <br />
              massa pell entasque vellt idlo neque
            </span>

            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 500,
                height: 20,
                maxWidth: '100%',
              }}
            >
              <Stack direction="column" spacing={2} sx={{ justifyContent: 'center' }}>
                <TextField
                  label="Email"
                  id="email"
                  name="email"
                  className="login-input"
                   size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  className="login-input"
                   size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack direction="row" spacing={15} sx={{ justifyContent: 'space-between', alignItems: 'center' , marginTop: '-3px !important'}}>
                  <FormControlLabel className="remember" control={<Checkbox size="small" defaultChecked />} label="Remember Me" />
                  <Link className="recovery" href="#" style={{textDecoration: "none"}} > Recovery Password</Link>
                </Stack>

                <div className="submit-wrapper">
                  <Stack direction="column" spacing={2} sx={{ justifyContent: 'center' }}>
                    <Button sx={{ textTransform: "none"}} variant="contained">
                      Login
                    </Button>
                    
                    <Button
                      sx={{ textTransform: "none", color: 'gray', borderBlockColor: 'gray'  }}
                      variant="outlined"
                      startIcon={
                      <img src={googleIconSrc} width={20} alt="google" /> }>
                      Sign in with Google
                    </Button>
                  </Stack>
                </div>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', marginTop: 20 }}>
                <span className="account">
                  Don't have account yet ?</span>
                <Link href="#" style={{ textDecoration: "none" }}>Sign Up</Link>
              </Stack>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default LoginForm;