import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerAside = styled.aside`
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

export const Devs = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const DevItem = styled.li`
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #8e4dff;
    font-size: 14px;
    transition: color 0.2s;

    &:hover {
      color: ${darken(0.08, '#8e4dff')};
    }
  }
`;

export const UserInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    color: #7159c1;
    border: 0;
    background: none;
    padding: 10px 5px;
    font-size: 15px;

    cursor: pointer;

    &:hover {
      color: ${darken(0.08, '#8e4dff')};
    }
  }
`;
