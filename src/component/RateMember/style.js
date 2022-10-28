import styled from 'styled-components';


export const ContainerRateMembers = styled.div`
  display: grid;

  /* grid-template-columns: 0.5fr 1fr 1fr 1fr; */

  grid-template-columns: ${(props)=>props.MyGridTemplateColumns};
  grid-template-rows: 1fr;
  width: 100%;
  height: 5rem;
  background-color: #F0F2F5;
  gap: 10px;
  @media (max-width: 980px) {
  grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;

  }

`;


export const ContainerImageMember = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

`;
export const BackgrounImgRateMembers = styled.div`
  background-color: #1282A2;
  height: 4rem;
  width: 4rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 14px #000000;
  @media (max-width: 980px) {
    height: 2.5rem;
    width: 2.5rem;

    }
`;

export const ContainerDataRateMembers = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  grid-column-gap: 5px;

`;


export const RateMemberName = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8vw;
  @media (max-width: 980px) {
    font-size: 1.2vw;
  }

`;
export const RateMemberEmail = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 0.6vw;
  @media (max-width: 980px) {
    font-size: 1vw;
  }

`;


export const RateMemberRol = styled.p`
  font-family: 'Press Start 2P',cursive;
    color: #000000;
    font-style: normal;
    display: flex;
    text-align: center;
    font-weight: 400;
    font-size: 0.6vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  @media (max-width: 980px) {
    font-size: 1vw;
  }

`;

export const AchievementStatus = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 0.6vw;
  height:100%;
  text-align:center;
  @media (max-width: 980px) {
  grid-template-columns: 1fr 2fr 0.5fr;
    padding:10px;
    font-size: 1vw;
  }
`;


export const RateMemberImg = styled.img`
  width:100%;
  height:100%;
`;


export const ContainerCalMember = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  width: 100%;
`;
ContainerSelect

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  width: 60%;


  & select[name=select]{
    font-family: 'Press Start 2P';
    color: #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 0.6vw;
  }


  @media (max-width: 980px) {
    width: 70%;


      & select[name=select]{

      font-size: 1vw;
      padding: 0.3em 0.1rem 0.4rem 0.1rem;
    }

  }


`;


export const ContainerImgRateCal = styled.div`
  display: flex;
  flex-direction: row;
  width:40%;
  height:100%;
  align-items: center;

  justify-content: center;

  @media (max-width: 980px) {
    width: 30%;
  }
`;

export const ImgSatar = styled.img`
  width:3rem;
  height:3rem;

  @media (max-width: 980px) {
    width:1.5rem;
    height:1.5rem;


  }
`;

