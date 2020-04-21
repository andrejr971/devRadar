import React from 'react';

import { Devs, DevItem, UserInfo } from './styles';

export default function Main({ devs }) {
  return (
    <Devs>
      {devs.map((dev) => (
        <DevItem key={dev.github_username}>
          <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <UserInfo>
              <strong>{dev.name}</strong>
              <span>{dev.techs.join(', ')} </span>
            </UserInfo>
          </header>
          <p>{dev.bio}</p>
          <a href={`https://github.com/${dev.github_username}`} target="blank">
            Acessar perfil no Github
          </a>
        </DevItem>
      ))}
    </Devs>
  );
}
