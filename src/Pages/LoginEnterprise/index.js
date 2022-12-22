import React, { useEffect } from "react";
import {
  TextField,
  Grid,
  Box,
  Snackbar,
  Alert,
  Typography,
  Link,
} from "@mui/material";
import { useHistory } from "react-router-dom";

import LoadingButton from "@mui/lab/LoadingButton";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { api } from "../../services/api";
import Notification from "../../Components/Notification";
import logout from "../../services/lib/logout";

import Header from "../../Components/Header";

export default function LoginEnterprise() {
  const history = useHistory();

  const [message, setMessage] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const submit = (data) => {};

  useEffect(() => {
    logout();
  }, []);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    api
      .post("/sessions", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        localStorage.setItem("user", res.data.user.name);
        localStorage.setItem("token", res.data.token);

        history.push("/dashboard");

        setLoading(false);
      })
      .catch((err) => {
        setMessage({ message: err, type: "error" });
        setLoading(false);
      });
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Login Empresas
      </Typography>
      <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}>
        <Notification message={message} />
        <TextField
          margin="normal"
          fullWidth
          required
          id="email"
          label="Usuario"
          name="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          loading={loading}
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </LoadingButton>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography>
              <Link href="/register" variant="body2">
                {"Ainda não possui conta? Cadastre-se agora"}
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link href="/register" variant="body2">
                {"Esqueci minha senha"}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
