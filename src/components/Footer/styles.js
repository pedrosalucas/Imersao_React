import styled from 'styled-components';


export const FooterBase = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background: var(--menuColor);
  border-top: 2px solid var(--primary);
  padding: 32px 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
    height: 15em;
  }
`;