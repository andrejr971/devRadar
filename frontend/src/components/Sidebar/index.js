import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import { Container, FormBlock, FormGroup, ContainerMain } from './styles';

import api from '../../services/api';

import Main from '../Main';

export default function Sidebar() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [devs, setDevs] = useState([]);
  const [dev, setDev] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 300000,
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs');

      setDevs(response.data);
    }
    loadDevs();
  }, [devs]);

  async function handleSubmit(data) {
    try {
      const response = await api.post('devs', data);
      toast.success('Cadastrado com sucesso');
      setGithubUsername('');
      setTechs('');

      setDevs([...devs, response.data]);
    } catch (err) {
      toast.error('Falha ao cadastrar');
    }
  }

  return (
    <>
      <Container>
        <strong>Cadastrar</strong>
        <Form onSubmit={handleSubmit}>
          <FormBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <Input
              name="github_username"
              id="github_username"
              autoComplete="none"
              value={github_username}
              onChange={(e) => setGithubUsername(e.target.value)}
              required
            />
          </FormBlock>
          <FormBlock>
            <label htmlFor="techs">Tecnologias</label>
            <Input
              name="techs"
              id="techs"
              autoComplete="none"
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
              required
            />
          </FormBlock>
          <FormGroup>
            <FormBlock>
              <label htmlFor="latitude">Latitude</label>
              <Input
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                autoComplete="none"
                type="number"
                required
              />
            </FormBlock>
            <FormBlock>
              <label htmlFor="longitude">Longitude</label>
              <Input
                name="longitude"
                id="longitude"
                autoComplete="none"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
                type="number"
              />
            </FormBlock>
          </FormGroup>

          <button type="submit">Salvar</button>
        </Form>
      </Container>
      <ContainerMain>
        <Main devs={devs} />
      </ContainerMain>
    </>
  );
}
