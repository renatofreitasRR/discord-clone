import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container className={selected ? 'ative' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon className="icon" />
        <SettingsIcon className="icon" />
      </div>
    </Container>
  );
}

export default ChannelButton;