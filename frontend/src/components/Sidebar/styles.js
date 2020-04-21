import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;
  }

  button[type='submit'] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #7159c1;
    border-radius: 4px;
    padding: 15px 20px;

    font-size: 20px;
    color: #fff;
    font-weight: bold;

    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#7159c1')};
    }
  }
`;

export const FormBlock = styled.div`
  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
    transition: border-bottom 0.2s ease-in;

    &:focus {
      border-bottom: 1px solid #7159c1;
    }
  }

  & + & {
    margin-top: 20px;
  }

  & + &:last-child {
    margin-top: 0;
  }
`;

export const FormGroup = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const ContainerMain = styled.main`
  flex: 1;
`;
