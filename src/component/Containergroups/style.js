import styled from 'styled-components';
import { Form,Button,FormGroup,Input,Label,Row ,Col} from 'reactstrap';

export const ContainerGrid = styled.div`

  display: grid;
  grid-template-rows: 10% 90%;
  width: 100%;
  padding: 1rem;
`;
export const ContainerQuests = styled.div`

display: grid;
    grid-template-columns: repeat(4,25%);
    width: 100%;
    gap: 1rem;
    overflow: scroll;
    @media (max-width: 920px) {
      grid-template-columns: repeat(2,50%);
    }
`;

export const Backgroundquests = styled.div `

background-color: white;
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;


`
;

export const BackgroundNewquests = styled.div `

background-color:  #eeefef;
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;


`
;

export const LetterG = styled.h1`

font-family: 'Press Start 2P', cursive;
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 2vh;

   /* text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;*/

`;

export const LetterP = styled.h1`

font-family: 'Press Start 2P', cursive;
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vh;
padding: 2vh;
`;

export const LetterPG = styled.h1`

font-family: 'Press Start 2P', cursive;
  color: lightgreen;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vh;
padding: 2vh;
`;

export const LetterPR = styled.h1`

font-family: 'Press Start 2P', cursive;
  color: red;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vh;
padding: 2vh;
`;

export const Boton = styled.button `
  background-color: #1282A2;
  width:10%;
  display: flex;
  font-family: 'Press Start 2P', cursive;
height: 80px;
  padding: 1.5vh;

`
;

export const ContainerQuestCarInfo = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`
;
export const ContainerButtons = styled.div `
    display:flex;
    width: 100%;
    flex-direction: row;
    height: 15%;
  & Button{
    background-color:#1282A2;
  }
  & Button[ name=Edit]:hover{
    background-color:#30B61A;
  }
  & Button[ name=Delete]:hover{
    background-color:#af0d00;
  }
`
;

export const ContainerCard = styled.div `
    display:flex;

    width: 100%;
    flex-direction: row;
  height: 85%;
`
;
