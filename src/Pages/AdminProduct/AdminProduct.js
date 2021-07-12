import React, { useState, useEffect } from 'react';
import Input from '../../Components/Form/Input/Input';
import { Form, Section } from './style';
import Button from '../../Components/Form/Button/Button';
import useForm from '../../Hooks/useForm';
import { useHistory } from 'react-router-dom';
import { PRODUCT_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';

import Error from '../../Components/Helper/Error';

const Admin = () => {
  const codigo = useForm();
  const categoria = useForm();
  const descricao = useForm();
  const titulo = useForm();

  const [img, setImg] = useState({});

  const { data, error, loading, request } = useFetch();
  const history = useHistory();

  useEffect(() => {
    if (data) history.push('/admin');
  }, [data, history]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('titulo', titulo.value);
    formData.append('codigo', codigo.value);
    formData.append('descricao', descricao.value);
    formData.append('categoria', categoria.value);
    const token = window.localStorage.getItem('token');
    const { url, options } = PRODUCT_POST(formData, token);
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Input label='Titulo' type='text' name='titulo' {...titulo}></Input>
        <label htmlFor='Categoria'>Categoria</label>
        <fieldset className='fieldform' {...categoria}>
          <select className='fieldform'>
            <option>Sapato</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Tenis</option>
            <option>Outlet</option>
          </select>
        </fieldset>

        <datalist>Sapatos Masculino</datalist>
        <Input label='Código' type='text' name='codigo' {...codigo}></Input>
        <label htmlFor='descricao'>Descrição</label>
        <textarea
          label='Descrição'
          type='text'
          rows='10'
          cols='33'
          name='descricao'
          {...descricao}
        ></textarea>
        <input type='file' name='img' id='img' onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </Form>

      {img.preview && (
        <div
          className='img-preview'
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </Section>
  );
};

export default Admin;
