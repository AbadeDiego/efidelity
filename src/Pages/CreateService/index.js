import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DeleteIcon from '@mui/icons-material/Delete';
import { api } from '../../services/api/index'
import { Box, Divider, Grid, ImageList, TextField, Typography, CircularProgress } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Notification from '../../Components/Notification'
import checkToken from '../../services/lib/checkToken';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function CreateService() {
    const [serviceData, setServiceData] = useState([])
    const [message, setMessage] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const history = useHistory()

    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        let form = {
            title: data.get('title'),
            price: data.get('price'),
            expense: data.get('expense'),
            time: data.get('time'),

        }
        api.post('/services', form, { headers: { authorization: localStorage.getItem('token') } }).then(res => {
            toast.success('Serviço cadastrado com sucesso!', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)
            getApi()
        }).catch(err => {
            toast.error('Erro ao cadastrar serviço!', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)

        })

    }

    const getApi = () => {

        api.get('/services', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(res => {
            setServiceData(res.data)
        }).catch(err => checkToken(err, setMessage))
    }


    const removeService = (id) => {
        console.log(id)
        console.log(id)
        api.delete('/services', {

            headers: {
                authorization: localStorage.getItem('token'),
                id: id
            }
        }).then(res => {
            console.log(res)
            toast.warn('Serviço deletado com sucesso!', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getApi()
        }).catch(err => checkToken(err, setMessage))
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <Grid container justifyContent="space-between" spacing={2}>
            <Grid Item item xs={12} sm={12} md={12} lg={6}>
                <Grid container justifyContent="flex-start">
                    <Typography component="h1" variant="h5">
                        Novo serviço
            </Typography>
                    <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}>
                        <Notification message={message} />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="title"
                            label="Título"
                            name="title"
                            autoComplete="title"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="price"
                            label="Preço"
                            type="text"
                            id="price"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="expense"
                            label="Custo"
                            type="teste"
                            id="expense"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="time"
                            label="Tempo"
                            type="text"
                            id="time"
                            autoComplete="current-password"
                        />
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            loading={loading}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cadastrar
                </LoadingButton>

                    </Box>

                </Grid>
            </Grid>
            <Grid Item item xs={12} sm={12} md={12} lg={6}>

                <Grid container justifyContent="flex-end">
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom component="div">Serviços{serviceData <= 0 ? <CircularProgress size={20} sx={{ marginLeft: 2 }} /> : ''}</Typography>

                        <ImageList sx={{ height: 380 }} cols={1} rowHeight={164}>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {serviceData && serviceData.map(item => (
                                    <>
                                        <Divider />
                                        <ListItem button>
                                            <ListItemText primary={item.title} secondary={(
                                                <Grid container>
                                                    <Grid Item xs={10}>
                                                        <Grid container justifyContent="space-between">
                                                            <Typography>Preço: {item.price}</Typography>
                                                            <Typography>Custo: {item.expense}</Typography>
                                                            <Typography>Tempo: {item.time}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid Item xs={2}>
                                                        <Grid container justifyContent="flex-end">
                                                            <DeleteIcon onClick={() => removeService(item._id)} />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            )} />
                                        </ListItem>
                                    </>
                                ))}
                            </List>

                        </ImageList>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}