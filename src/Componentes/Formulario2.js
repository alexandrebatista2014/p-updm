import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario2 = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log('nome inserido');
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="forNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="forNome"
            value={form.nome}
            placeholder="Digite o nome"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Apenas um texto</Form.Text>
        </Form.Group>
        {form.forNome}

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="forEmail"
            value={form.email}
            placeholder="Digite o e-mail"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Apenas um texto</Form.Text>
        </Form.Group>
        {form.forEmail}

        <Button variant="primary">Enviar</Button>
      </Form>
    </>
  );
};

export default Formulario2;
