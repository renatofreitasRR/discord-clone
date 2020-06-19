import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display:flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 4px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }
`;
export const Role = styled.span`
  color: var(--gray);

  margin-top: 20px;
  text-transform: uppercase;
  font-size:12px;
  font-weight:500;
 
`;
export const User = styled.div`
  background: transparent;
  transition: background .2s;

  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;

  display: flex;
  align-items:center;

  cursor:pointer;

  &:hover{
    background: rgba(255, 255, 255, 0.1);
  }

  >strong{
    color: var(--white);
    opacity: 0.7;

    margin-left:12px;
    font-weight:13px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }

  >span{
    background-color: var(--discord);
    color: var(--white);

    border-radius: 4px;
    padding: 4px 5px;
    margin-left:9px;

    text-transform: uppercase;
    font-weight: bold;
    font-size:11px;
  }
`;
export const Avatar = styled.div`
  background-color: var(--primary);

  flex-shrink: 0;

  width:32px;
  height:32px;
  border-radius: 50%;

  &.bot{
    background-color: var(--mention-detail);
  }
`;