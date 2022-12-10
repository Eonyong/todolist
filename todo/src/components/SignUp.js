import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';

const theme = createTheme();

const ValidateEmail = mail => {
  if (String(mail).match(/^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm))
  {
    return true
  }
    return false
}

const textField = (props, handleChange) => (
  <TextField
    margin="normal"
    required fullWidth
    type={props}
    onChange={handleChange}
    id={props} label={props}
    name={props} autoComplete={props}
  />
)

export default function SignUp() {
  const navigator = useNavigate()
  
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (ValidateEmail(values.email)) {
      axios.post(
        "/user/register",
        values
      )
      .then((res) => {
        console.log(res.data)
        if (res.data.success) {
          navigator("/")
        }
      })
      .catch(e => console.error(e))
    } else {
      alert("You have entered an invalid email address!")
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                { textField("firstName", handleChange) }
              </Grid>
              <Grid item xs={12} sm={6}>
                { textField("lastName", handleChange) }
              </Grid>
              <Grid item xs={12}>
                { textField("email", handleChange) }
              </Grid>
              <Grid item xs={12}>
                { textField("password", handleChange) }
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/signin" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}