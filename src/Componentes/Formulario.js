import React from 'react';

const Formulario = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
        {form.nome}
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {form.email}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
