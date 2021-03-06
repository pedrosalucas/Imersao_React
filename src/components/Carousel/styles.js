import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: .4em;
  line-height: 1;
  border-bottom: 3px solid; 

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.p`
  font-family: 'Roboto', sans-serif;
  margin-left: 16px;
  text-decoration: none;
  margin-bottom: 0;
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 13px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 0 2%;
  margin-bottom: 16px;
`;
