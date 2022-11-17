import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  LinearProgress,
  Paper,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import Notification from "../../Components/Notification";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from "../../Components/Post";
import { api, apiToekn } from "../../services/api";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Grow from "@mui/material/Grow";

export default function Home() {
  const [message, setMessage] = React.useState({});
  const [transition, setTransition] = React.useState(undefined);
  const [openNewPurchase, setOpenNewPurchase] = React.useState(false);
  const [openNewCard, setOpenNewCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const TransitionRight = (props) => {
    return <Slide {...props} direction="right" />;
  };

  const handleClickOpenNewPurchase = () => {
    setOpenNewPurchase(true);
  };

  const handleCloseNewPurchase = () => {
    setOpenNewPurchase(false);
  };

  const handleClickOpenNewCard = () => {
    setOpenNewCard(true);
  };

  const handleCloseNewCard = () => {
    setOpenNewCard(false);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    apiToekn
      .get("connection")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <Typography variant="h5">
              Consulte seus cartões fidelidades
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Button onClick={handleClickOpenNewPurchase} variant="outlined">
                  Nova compra
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={handleClickOpenNewCard} variant="contained">
                  Novo cartão
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={5} padding={5}>
          {cards.length > 0 &&
            cards.map((e) => (
              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://institucional.ifood.com.br/images/share.jpg"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {e.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Aproveite, o valor desse cartão é de: {e.price}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Paper>

      <Paper style={{ marginTop: "5%" }}>
        <Grid
          container
          padding={3}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item>
            <Typography variant="h5">Lojas recorrentes</Typography>
          </Grid>
          <Grid item>
            <Button>Confira as lojas com mais recorrência de compras</Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={5} padding={5}>
          {cards.length > 0 &&
            cards.map((e) => (
              <Grid item style={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 150, borderRadius: "50%" }}
                  image="https://institucional.ifood.com.br/images/share.jpg"
                  alt="Live from space album cover"
                />
                <Typography  >{e.name}</Typography>
              </Grid>
            ))}
        </Grid>
      </Paper>

      <Dialog fullWidth open={openNewPurchase} onClose={handleCloseNewPurchase}>
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Registre sua nova compra
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              window.navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function (mediaStream) {
                  const video = document.querySelector("#video");
                  video.srcObject = mediaStream;
                  video.play();
                })
                .catch(function (err) {
                  console.log("Não há permissões para acessar a webcam");
                });
            }}
          >
            Ler QR code
          </Button>
          <Button onClick={handleCloseNewPurchase}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog fullWidth open={openNewCard} onClose={handleCloseNewCard}>
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Cadastre seu novo cartão fidelidade
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              style={{ marginTop: 15 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              style={{ marginTop: 15 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewCard}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
