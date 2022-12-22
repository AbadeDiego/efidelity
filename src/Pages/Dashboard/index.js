import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Card
                style={{ background: "rgba(111, 127, 195, 1)", color: "#fff" }}
              >
                <CardContent>
                  <Typography variant="h6">Vendas Fidelizadas</Typography>
                  <Typography variant="subtitle2">
                    Total de vendas registradas na plataforma
                  </Typography>
                  <Typography variant="h6">2500</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card
                style={{ background: "rgba(111, 127, 195, 1)", color: "#fff" }}
              >
                <CardContent>
                  <Typography variant="h6">Clientes Fiéis</Typography>
                  <Typography variant="subtitle2">
                    Total de clientes cadastrados na plataforma
                  </Typography>
                  <Typography variant="h6">500</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card
                style={{ background: "rgba(111, 127, 195, 1)", color: "#fff" }}
              >
                <CardContent>
                  <Typography variant="h6">Maior recorrência</Typography>
                  <Typography variant="subtitle2">
                    Dados apresentados com base no último ano
                  </Typography>
                  <Typography variant="h6">Janeiro</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card
                style={{ background: "rgba(111, 127, 195, 1)", color: "#fff" }}
              >
                <CardContent>
                  <Typography variant="h6">Prêmios destribuídos</Typography>
                  <Typography variant="subtitle2">
                    Total de prêmios distribuídos pela plataforma
                  </Typography>
                  <Typography variant="h6">800</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              {" "}
              <Card>
                <CardContent>
                  <Typography variant="h6">Prêmios destribuídos</Typography>
                  <Typography variant="subtitle2">
                    Total de prêmios distribuídos pela plataforma
                  </Typography>
                  <Typography variant="h6">800</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  {" "}
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Total de vendas</Typography>
                      <Typography variant="h6">R$ 3.852,00</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  {" "}
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Valor médio</Typography>
                      <Typography variant="h6">R$ 526,21</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  {" "}
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Taxa de conversão</Typography>
                      <Typography variant="h6">86.4%</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  {" "}
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Vendas no dia</Typography>
                      <Typography variant="h6">R$ 562,50</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
