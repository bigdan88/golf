import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Auth, Hub } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    marginTop: '16px',
  },
  form: {
    width: '100%',
    marginTop: '16px',
  },
  submit: {
    marginTop: '16px',
  },
}));

const SignUp = () => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const signUpResult = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: phoneNumber,
        },
      });
      console.log(signUpResult);
    } catch (error) {
      console.error(error);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={() => setSignUpOpen(!signUpOpen)}>Sign Up</Button>
      {signUpOpen && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5">Sign Up</Typography>
            <form className={classes.form} onSubmit={handleSignUp}>
              <TextField
                label="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign Up
                </Button>
            </form>
        </CardContent>
        </Card>
        )}
    </div>
);
};

export default SignUp;
