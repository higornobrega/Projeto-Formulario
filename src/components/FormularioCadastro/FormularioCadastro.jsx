import React from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

function FormularioCadastro() {
    return (
        <form action="">
            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth margin="normal"
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth margin="normal"
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth margin="normal"
            />

            <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Promoções"
            />

            <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Novidades"
            />

            <Button variant="contained" color="primary" type="submit"> Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;