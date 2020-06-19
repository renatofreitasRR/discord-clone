import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  background: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

  grid-area: UI;

  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:10px;

`;
export const Profile = styled.div`
  display:flex;
  align-items:center;
`;
export const Avatar = styled.div`
  background-color:var(--gray);
  width:32px;
  height:32px;
  border-radius:50%;
`;
export const UserData = styled.div`
  margin-left: 8px;

  display:flex;
  flex-direction:column;

  >strong{
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  >span{
    color: var(--gray);
    font-size: 13px;
  }
`;
export const Icons = styled.div`
  display:flex;
  align-items:center;
  
  >svg:not(:first-child){
    margin-left: 7px;
  }
`;
export const MicIcon = styled(Mic)`
  color: var(--white);
  opacity: 0.7;
  transition: opacity 0.2s;

  cursor:pointer;

  width:20px;
  height:20px;

  &:hover{
    opacity: 1;
  }
`;
export const HeadphoneIcon = styled(Headset)`
   color: var(--white);
  opacity: 0.7;
  transition: opacity 0.2s;

  cursor:pointer;

  width:20px;
  height:20px;

  &:hover{
    opacity: 1;
  }
`;
export const SettingsIcon = styled(Settings)`
   color: var(--white);
  opacity: 0.7;
  transition: opacity 0.2s;

  cursor:pointer;

  width:20px;
  height:20px;

  &:hover{
    opacity: 1;
  }
`;