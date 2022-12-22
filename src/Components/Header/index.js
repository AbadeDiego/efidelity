import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Efidelity.png";
import Icon from "../../Assets/user.png";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const [loja, setLoja] = useState(false);
  const lojista = () => {
    setLoja(!loja);

    if (window.location.href.slice(-1) == "n") {
      history.push("/login-enterprise");
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <img src={Logo} style={{ margin: 15, width: 180, height: 60 }} />
        </Grid>
        <Grid item style={{ margin: 15, marginTop: "2.5%" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant={window.location.href.slice(-1) == "e" ? "outlined" : "text"}
                onClick={lojista}
                startIcon={<img src={Icon} />}
              >
                Área do Lojista
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  history.push("/");
                }}
                variant="outlined"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  history.push("/register");
                }}
                variant="contained"
              >
                Cadastre-se
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
