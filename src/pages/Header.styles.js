// Header.styles.js
import styled from 'styled-components';

export const HeadContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

export const LeftItem = styled.div`
  flex: 1;
  img {
    height: 5rem;
  }
`;

export const CenterItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  gap: 2rem;
`;

export const CenterItem = styled.div`
  margin: 0 10px;
  text-align: center;
  display:flex;
  flex-direction: block;
  gap: 1rem;



  img {
    height: 4rem;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 2rem ;
    color: #FFF;
    cursor: pointer;
  }

  p:hover {
    color: #007bff;
  }
`;