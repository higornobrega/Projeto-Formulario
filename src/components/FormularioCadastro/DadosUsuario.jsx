import React from 'react'
import { Button, TextField } from '@material-ui/core'

function DadosUsuario({aoEnviar}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                type="email"
                id="email"
                label="email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                type="password"
                id="senha"
                label="senha"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" type='submit'>Cadastro</Button>

        </form>
    );
}

export default DadosUsuario;