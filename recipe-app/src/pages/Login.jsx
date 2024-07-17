import { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Link } from "@mui/material";
import { useLogin } from "../hooks/useLogin";
import { Link as NewLink } from "react-router-dom";

const defaultTheme = createTheme();

const Login = () => {
  const passwordElement = useRef();
  const emailElement = useRef();
  const { login, isLoading, error } = useLogin();
  const handleSubmit = (event) => {
    event.preventDefault();
    login(emailElement.current.value, passwordElement.current.value);
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
            Login
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
              autoFocus
              autoComplete="off"
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
              Login
            </Button>
          </Box>
          <Typography variant="overline">
            Don't have an account?
            <Link href="./signup" underline="always">
              {" "}
              Register
            </Link>
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
