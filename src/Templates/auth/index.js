import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Header from "../../Components/Header";

export default function SignInSide({ children }) {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={false} sm={4} md={7}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
          }}
          style={{ marginLeft: "15%" }}
        >
          <Typography variant="h2">Que bom ter</Typography>
          <Typography variant="h2">
            você{" "}
            <span style={{ color: "#fff", background: "#55cced" }}>
              de volta!
            </span>
          </Typography>
          <Typography variant="h5">
            Não perca tempo, cadastre já seus
          </Typography>
          <Typography variant="h5">
            novos cartões e <strong>resgate seus prêmios.</strong>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
