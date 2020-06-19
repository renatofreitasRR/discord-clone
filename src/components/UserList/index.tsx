import React from 'react';
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>BOT</span>}
    </User>
  )
}

const ServerName: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Renato Freitas" />

      <Role>Disponível - 1</Role>
      <UserRow nickname="Renato Freitas" isBot />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      <UserRow nickname="Renato Freitas"  />
      
      <UserRow nickname="Rodrigo Freitas" isBot />

    </Container>
  );
}

export default ServerName;