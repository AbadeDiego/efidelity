import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QRCode from "react-qr-code";
import { apiToekn } from "../../services/api";
import Notification from "../../Components/Notification";
import moment from "moment";

export default function Promotion() {
  const [openNewPromotion, setOpenNewPromotion] = React.useState(false);
  const [message, setMessage] = React.useState({});
  const [openNewPurchase, setOpenNewPurchase] = React.useState(false);
  const [openQr, setOpenQr] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [name, setName] = React.useState("");
  const [promotions, setPromotions] = React.useState([]);

  const handleCloseNewPurchase = () => {
    setOpenNewPurchase(!openNewPurchase);
    setOpenQr(false);
    setEmail("");
  };

  const handleCloseNewPromotion = () => {
    setOpenNewPromotion(!openNewPromotion);
  };

  useEffect(() => {
    apiToekn
      .get("card")
      .then((res) => {
        setPromotions([res.data]);
      })
      .catch((err) => {
        setMessage({ message: err.response.data.error, type: "error" });
      });
  }, []);

  const createPromotion = () => {
    apiToekn
      .post("card", { name, price })
      .then((res) => {
        setOpenNewPromotion(false);
        setName("");
        setPrice("");
      })
      .catch((err) => {
        setOpenNewPromotion(false);
        setName("");
        setPrice("");
        setMessage({ message: err.response.data.error, type: "error" });
      });
  };

  return (
    <>
      <Notification message={message} />
      <Paper>
        <Grid
          container
          padding={3}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item>
            <Typography variant="h5">Consulte as promoções</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Button onClick={handleCloseNewPromotion} variant="outlined">
                  Nova promoção
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={5} padding={5}>
          {promotions.map((item) => (
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography># {item.company_id}</Typography>
                </div>
                <div>
                  <Typography style={{ textAlign: "center" }}>
                  {moment(item.createdAt).format("DD/MM/YYYY")}
                  </Typography>
                </div>

                <div>
                  <Typography style={{ color: "green" }}>
                    status: ativa
                  </Typography>
                </div>
                <div>
                  <Typography>R$ {item.price},00 necessários</Typography>
                </div>

                <div>
                  <IconButton
                    onClick={handleCloseNewPurchase}
                    aria-label="share"
                  >
                    <QrCodeIcon />
                  </IconButton>
                </div>
              </div>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Dialog fullWidth open={openNewPurchase} onClose={handleCloseNewPurchase}>
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Cliente, escaneie o QR code abaixo:
        </DialogTitle>
        <DialogContent>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            style={{ maxWidth: "100%", width: "65%", marginRight: "5%" }}
            placeholder="Digite o email do cliente"
          ></TextField>
          <Button onClick={() => setOpenQr(true)} variant="contained">
            Gerar QR Code
          </Button>
          <br />
          <br />
          <br />
          <QRCode
            size={256}
            style={{
              maxWidth: "100%",
              width: "100%",
              display: openQr ? "block" : "none",
            }}
            value={
              "https://www.figma.com/file/VcU8MFXluGJt8dtzoPN98F/E-fidelity?node-id=214%3A1361&t=nfodgcf2SptESYgG-0"
            }
            viewBox={`0 0 256 256`}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ display: openQr ? "block" : "none" }}
            onClick={handleCloseNewPurchase}
            variant="contained"
          >
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth
        open={openNewPromotion}
        onClose={handleCloseNewPromotion}
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Cadastre sua nova promoção
        </DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
            style={{ maxWidth: "100%", width: "100%" }}
            placeholder="Nome da promoção"
          ></TextField>

          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            size="small"
            style={{ maxWidth: "100%", width: "100%", marginTop: 15 }}
            placeholder="valor da promoção"
          ></TextField>
          <Button
            style={{ maxWidth: "100%", width: "100%", marginTop: 15 }}
            variant="contained"
            onClick={createPromotion}
          >
            Cadastrar
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ display: openQr ? "block" : "none" }}
            onClick={handleCloseNewPurchase}
            variant="contained"
          >
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
