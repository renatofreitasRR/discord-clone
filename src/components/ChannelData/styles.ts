import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`   
  background-color: var(--primary);

  grid-area: CD;

  display:flex;
  flex-direction: column;
  justify-content:space-between;
`;
export const Messages = styled.div`   

  padding: 20px 0;
  max-height : calc(100vh - 46px - 68px);

  display:flex;
  flex-direction:column;

  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
    border-radius: 4px;
  }
`;
export const InputWrapper = styled.div`   
  width:100%;
  padding: 0 16px;
`;
export const Input = styled.input` 
  color: var(--white);
  background-color: var(--chat-input);

  width:100%;
  height: 44px;
  padding: 0px 10px 0 57px;
  border-radius: 7px;

  position:relative;

  &::placeholder{
    color: var(--gray);
  }

  ~ svg{
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;
export const InputIcon = styled(AlternateEmail)` 
  color: var(--gray);  
  width: 24px;
  height:24px;
`;
