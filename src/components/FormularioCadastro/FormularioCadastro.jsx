import React from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

function FormularioCadastro() {
    let nome = "Higor";
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            console.log(nome);
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    nome = event.target.value;
                    
                    if(nome.length > 3){
                        nome = nome.substr(0,3);
                    }
                }}
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