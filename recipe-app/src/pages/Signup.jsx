import { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "@mui/material";
import { useSignup } from "../hooks/useSignup";
import { Link as NewLink } from "react-router-dom";
import { Alert } from "@mui/material";
const defaultTheme = createTheme();

const Signup = () => {
  const passwordElement = useRef();
  const emailElement = useRef();
  const { signup, isLoading, error } = useSignup();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(emailElement.current.value, passwordElement.current.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        className="d-flex flex-row-reverse"
        style={{ marginInline: "2em 2em", marginTop: "2em" }}
      >
        <NewLink className="btn btn-success" to={"/"}>
          <i class="bx bx-home"></i>
        </NewLink>
      </div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "4em",
            borderRadius: "2em",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "warning.main" }}></Avatar>
          <Typography component="h2" variant="body">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              inputRef={emailElement}
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef={passwordElement}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SignUp
            </Button>
          </Box>
          <Typography variant="overline">
            Already have an account?
            <Link href="./login" underline="always">
              {" "}
              Login
            </Link>
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="caption">
            Make sure your password has:
            <ul>
              <li>Atleast 8 characters</li>
              <li>A number</li>
              <li>A special character</li>
              <li>A capital letter</li>
            </ul>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
