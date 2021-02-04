import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
      background: var(--twitter-dark-hover);
  }
`;