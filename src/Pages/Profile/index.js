import {
  Button,
  CardMedia,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function Profile() {
  return (
    <>
      <Paper style={{ marginTop: "5%", padding: 15 }}>
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item>
            <Grid container>
              <Grid item>
                <CardMedia
                  component="img"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    marginRight: 5,
                  }}
                  image="https://www.tenda.com/eudouconta/wp-content/uploads/2021/09/Pessoa-fisica-mobile.jpg"
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item marginTop={5}>
                <Typography variant="h4">{localStorage.getItem('user')}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item marginTop={7}>
            <Grid container>
              <Grid item>
                <Button variant="contained">Editar Perfil</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginTop: 25, padding: 15 }}>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Typography variant="h5">
              Informações pessoais
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Usuario"
              name="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Celular"
              name="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Senha"
              name="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Tipo Juridico"
              name="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Endereço"
              name="email"
              autoFocus
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
