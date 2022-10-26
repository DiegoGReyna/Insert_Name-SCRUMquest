import styled from 'styled-components';
import BackGroundImage from "../../img/ParedMadera_SinClavos.png"
import DefaultUserImage from "../../img/person-fill.svg"
export const ContainerCreateUser = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap");
 background-image:  url(${BackGroundImage});
 background-size:140px;
 height:100%;
 border: 4px solid #000000;
  box-shadow: 0px 4px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:15%;



  & h1 {

    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    font-size: 2.3vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  }
  & input{
    font-size: 1.5vh;
  }
  & label{
    font-size: 1.2vh;
  }
  & button{
    font-size: 1.2vh;
  }
  & a{
    font-size: 1.2vh;
  }

  &h2{
    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  }




`;

export const SubTitle = styled.h2`
    text-align:center;
    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
`;


export const ImageUser = styled.div`
  background-image:url(${DefaultUserImage})  ;
  background-size:240px;
   border-radius:10rem;
   background-repeat:no-repeat;

   display:grid;
   background-color:#F0F2F5;
   width:15rem;
   height:15rem;
   background-repeat:center;

   @media (max-width: 970px) {
      border-radius:5rem;
      width:10rem;
      height:10rem;
      background-size:160px;
    }



`;

export const InputFile = styled.input`

  background-color:black;
  display:none;

`;

export const LabelInputFile = styled.label`

    background-color:black;
    font-size: 1.2vh;
    background-color: #1282A2;
    color: #F0F2F5;
    width: 100%;
    font-family: 'Press Start 2P', cursive;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover{
      background-color: #30B61A;
      color:#F0F2F5;
    }
`;

export const ContainerImg = styled.div`

    display: grid;
    width: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    align-items: center;
    justify-content: center;
    justify-items: center;



`;

export const CarImageUser = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap");
 background-image:  url(${BackGroundImage});
 background-size:140px;
 height:100%;
 border: 2px solid #000000;
 box-shadow: 0px 4px 7px 15px rgba(0, 0, 0, 0.64);
  border-radius: 10px;
  width:95%;
  display: grid;
    /* grid-template-columns: 25% 25%; */
    grid-template-rows: 10% 70% 20%;
    justify-content: center;

    @media (max-width: 970px) {
    width:100%;
    grid-template-rows: 10% 60% 30%;
    & label{
      font-size: 0.5rem;
    }

    & h2{
      font-size: 0.5rem;
    }




  }

`;



