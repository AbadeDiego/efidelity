// import React, { useEffect } from 'react'
// import { TextField, Grid, Box, Snackbar, Alert, Typography, Link } from '@mui/material'
//

// import LoadingButton from '@mui/lab/LoadingButton';

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import { api } from '../../services/api'
// import Notification from '../../Components/Notification';
// import logout from '../../services/lib/logout';

// export default function Resgister() {
//

//     const submit = (data) => {

//     }

//     useEffect(() => {
//         logout()
//     }, [])

//     return (
//         <>
//             <Typography component="h1" variant="h5">
//                 Crie sua Conta
//             </Typography>
//             <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}>
//                 <Notification message={message} />

//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     required
//                     id="name"
//                     label="Nome Completo"
//                     name="name"
//                     autoComplete="name"
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     required
//                     id="email"
//                     label="Email"
//                     name="email"
//                     autoComplete="email"
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Senha"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                 />
//                 <LoadingButton
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     loading={loading}
//                     sx={{ mt: 3, mb: 2 }}
//                 >
//                     Cadastrar
//                 </LoadingButton>
//                 <Grid container justifyContent={"flex-end"}>
//                     <Grid item>
//                         <Link href="/" variant="body2">
//                             {"Já tem uma conta ? Faça login!"}
//                         </Link>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </>
//     )
// }

import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Grid, Box, Snackbar, Alert, Link } from "@mui/material";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { LoadingButton } from "@mui/lab";

const steps = ["", ""];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [message, setMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    api
      .post("/users/register", {
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("name"),
      })
      .then((res) => {
        setMessage({
          message: "Usuario cadastrado com sucesso",
          type: "success",
        });
        api
          .post("/users/login", {
            email: data.get("email"),
            password: data.get("password"),
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/");
          })
          .catch((err) => {});
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
            {activeStep == 0 ? (
              <Box
                component="form"
                onSubmit={(e) => handleSubmit(e)}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="name"
                  label="Nome Completo"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
              </Box>
            ) : (
              <Box
                component="form"
                onSubmit={(e) => handleSubmit(e)}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="name"
                  label="Nome Completo"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
                <Grid container spacing={2}>
                  <Grid item xs={8}>
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
                  </Grid>
                  <Grid item xs={4}>
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
                  </Grid>
                </Grid>
              </Box>
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep === 0 ? (
              ""
            ) : (
              <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}

            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
          </Box>
        </React.Fragment>
      </div>
    </Box>
  );
}
