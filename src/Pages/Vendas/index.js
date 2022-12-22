import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function Vendas() {
  return (
    <>
      <Paper>
        <Grid
          container
          padding={3}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item>
            <Typography variant="h5">Consulte suas vendas e prêmios</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={5} padding={5}>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>Lucas Eduardo Salles de Souza</Typography>
                <Typography>486.316.678.89</Typography>
              </div>
              <div>
                <Typography style={{ textAlign: 'center' }}>14/04/2022</Typography>
                <Typography>Cartão de crédito</Typography>
              </div>
              <div>
                <Typography>15% concluído</Typography>
                <Typography style={{ color: 'green' }}>R$ 195,00</Typography>
              </div>
            </div>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>Lucas Eduardo Salles de Souza</Typography>
                <Typography>486.316.678.89</Typography>
              </div>
              <div>
                <Typography style={{ textAlign: 'center' }}>14/04/2022</Typography>
                <Typography>Cartão de crédito</Typography>
              </div>
              <div>
                <Typography>15% concluído</Typography>
                <Typography style={{ color: 'green' }}>R$ 195,00</Typography>
              </div>
            </div>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>Lucas Eduardo Salles de Souza</Typography>
                <Typography>486.316.678.89</Typography>
              </div>
              <div>
                <Typography style={{ textAlign: 'center' }}>14/04/2022</Typography>
                <Typography>Cartão de crédito</Typography>
              </div>
              <div>
                <Typography>15% concluído</Typography>
                <Typography style={{ color: 'green' }}>R$ 195,00</Typography>
              </div>
            </div>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>Lucas Eduardo Salles de Souza</Typography>
                <Typography>486.316.678.89</Typography>
              </div>
              <div>
                <Typography style={{ textAlign: 'center' }}>14/04/2022</Typography>
                <Typography>Cartão de crédito</Typography>
              </div>
              <div>
                <Typography>15% concluído</Typography>
                <Typography style={{ color: 'green' }}>R$ 195,00</Typography>
              </div>
            </div>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>Lucas Eduardo Salles de Souza</Typography>
                <Typography>486.316.678.89</Typography>
              </div>
              <div>
                <Typography style={{ textAlign: 'center' }}>14/04/2022</Typography>
                <Typography>Cartão de crédito</Typography>
              </div>
              <div>
                <Typography>15% concluído</Typography>
                <Typography style={{ color: 'green' }}>R$ 195,00</Typography>
              </div>
            </div>
            <Divider />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
