import React from 'react';
import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome />

          <Separator />

          <ServerButton mentions={5} />
          <ServerButton />
          <ServerButton hasNotifications />
          <ServerButton hasNotifications />
          <ServerButton />
          <ServerButton mentions={1} />
          <ServerButton />
          <ServerButton />
          <ServerButton mentions={3} />
          <ServerButton />
          <ServerButton hasNotifications />
      </Container>
  );
}

export default ServerList;