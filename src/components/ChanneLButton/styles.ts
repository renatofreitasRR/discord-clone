import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  background-color: transparent;   

  display: flex;
  align-items:center;
  justify-content: space-between;

  cursor:pointer;

  padding: 5px 3px;
  border-radius: 5px;

  transition: background-color .2s;

  >div{
    display:flex;
    align-items: center;
  }
  >div span{
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active{
    background-color: var(--quinary);

    >div span{
      color: var(--white);
    }

    >div .icon{
      display:inline;
    }
  }

  > div .icon{
    display:none;
  }

`;

export const HashtagIcon = styled(Hashtag)`
  color: var(--symbol);

  width:20px;
  height:20px;
 
`;
export const InviteIcon = styled(PersonAdd)`
  color: var(--symbol);

  width:16px;
  height:16px;

  cursor:pointer;
  transition: color .2s;

  &:hover{
    color: var(--white);
  }

`;
export const SettingsIcon = styled(Settings)`
  color: var(--symbol);

  width:16px;
  height:16px;
  margin-left: 5px;

  cursor:pointer;
  transition: color .2s;

  &:hover{
    color: var(--white);
  }

`;
