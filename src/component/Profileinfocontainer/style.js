import styled from 'styled-components';

export const Title = styled.h1`
    text-align:center;
    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    text-align:center;

    @media (max-width: 970px) {
      font-size: 2vw;

    }
`;

export const Paddedcontainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    & Button{

    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    background-color: #1282A2;
    min-width: 10%;
   }

   & Button:hover{
    background-color: #30B61A;
   }

   & *{
    margin: 5px;
   }

`;

export const Piccontainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: #1282A2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10%;

  @media (max-width: 970px) {
    height: 100px;
    width: 100px;
  }
`;
