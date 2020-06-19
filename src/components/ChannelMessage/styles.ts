import styled from 'styled-components';

export const Container = styled.div`
  background-color:transparent;
  
  display:flex;
  align-items:center;

  padding: 4px 16px;
  margin-right: 4px;

  &.mention{
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div{
    margin-top: 13px;
  }
`;
export const Avatar = styled.div`
  background-color: var(--secondary);

  border-radius: 50%;
  width: 40px;
  height: 40px;

  &.bot{
    background-color: var(--mention-detail);
  }
`;
export const Message = styled.div`
  min-height: 40px;
  margin-left: 17px;

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
export const Header = styled.div`
  display:flex;
  align-items:center;

  > strong{
    color: var(--white);
    font-size:16px;
  }

  > span{
    background-color: var(--discord);
    color: var(--white);

    border-radius: 4px;
    padding: 4px 5px;
    margin-left:6px;

    text-transform: uppercase;
    font-weight: bold;
    font-size:11px;
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;
export const Content = styled.div`
  color:var(--white);

  text-align: left;
  font-size:15px;
`;
export const Mention = styled.span`
  color: var(--link);
  cursor:pointer;

  &:hover{
    text-decoration: underline;
  }
`;
