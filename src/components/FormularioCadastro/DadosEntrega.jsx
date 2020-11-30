import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />
         <TextField
        id="endereco"
        label="Endereço"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
         <TextField
        id="numero "
        label="Número"
        required
        type="number"
        variant="outlined"
        margin="normal"
      />
         <TextField
        id="estado"
        label="Estado"
        required
        type="text"
        variant="outlined"
        margin="normal"
      />
         <TextField
        id="cidade"
        label="Cidade"
        required
        type="text"
        variant="outlined"
        margin="normal"
      />
    <Button variant="contained" color="primary" type='submit' fullWidth>Cadastro</Button>

    </form>
  );
}

export default DadosEntrega;
