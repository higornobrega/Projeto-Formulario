import React from 'react'
import { Button, TextField } from '@material-ui/core'

function DadosUsuario() {
    return (
        <form>
            <TextField
                type="email"
                id="email"
                label="email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                type="password"
                id="senha"
                label="senha"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" type='submit'>Cadastro</Button>

        </form>
    );
}

export default DadosUsuario;