import React, {useRef, useEffect} from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChanelMessage, { Mention } from '../ChannelMessage';


const ServerName: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;
    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas"
          date="17/12/2001"
          content="Eu sou uma batata"
        />
        <ChanelMessage
          author="Renato Freitas BOT"
          date="17/12/2001"
          content={
            <>
              <Mention>@Renato Freitas</Mention>, voce é muito lindo.
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ServerName;