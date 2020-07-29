import styled from 'styled-components';


export const FooterBase = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;