import styled from 'styled-components';
import {
  Button
} from 'reactstrap';

export const BackGroundModal = styled.div`
   background: rgba(11, 115, 186, 0.15);
    backdrop-filter: blur(3px);
    width:100%;
    position: fixed;
    height:100vh;
    display:grid;
    top:0%;
    left:0%;
    justify-items: center;
    align-items: center;
`;

export const ModalCard = styled.div`
      background: #D9D9D9;
    box-shadow: 2px 4px 20px 20px;
    border-radius: 5px;
    width: 50%;
    min-height: 50%;
    grid-template-rows: 5% 85% 10%;
    display: grid;

`;


export const ModalForm = styled.form`

    display: grid;
    width: 100%;
    height: 90%;
    align-items: center;
    justify-items: center;
    height: 100%;

  & Button{

    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    background-color: #1282A2;
  }
  & Button[type=submit]:hover{

    background-color: #30B61A;
  }
  & Button[name=cancel]:hover{

      background-color: #af0d00;
      }
`;


export const GroupModalCol = styled.div`
      display: grid;
    width: 90%;
    height: 100%;
    align-items: center;
    align-content: space-between;
`;




export const TitleModal = styled.h1`
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

export const ModalRowReverse = styled.div`
    text-align:center;
    font-family: 'Press Start 2P', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    text-align:center;

    display:grid;
    justify-content: end;

    & Button{
      color: #af0d00;
      background-color:transparent;
      border-color:transparent;




    }

    & Button:hover{
        background-color:#af0d00;
        border-color:transparent;
      }
`;

export const RowCenter = styled.div`
        display: grid;
    width: 100%;
    grid-template-columns: 20% 20%;
    gap: 5px;
    justify-content: center;


    & button{
      font-size:1.5vh;
    }

    @media (max-width: 970px) {

      display: flex;
      flex-direction: column;
      align-items: center;

    }
`;

export const RowCenter100 = styled.div`
      display: grid;
      width: 100%;
      grid-template-columns: 50% 50%;
      justify-content: center;


      & button{
        font-size:1.5vh;
      }

      @media (max-width: 970px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        grid-template-columns: 100% 100%;
      }
`;

export const Cont = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;

`;

export const Cont2 = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items:center;
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
