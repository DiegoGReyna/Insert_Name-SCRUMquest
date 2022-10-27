import styled from 'styled-components';


export const BackgroundAchievement = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr;
   /* grid-template-rows: 1fr; */
  width: 100%;
  height: 5rem;
  /* height: 10vh; */
  background-color: #F0F2F5;
  gap: 10px;
  @media (max-width: 980px) {
  grid-template-columns: 1fr 2fr 0.5fr;

  }

`;

export const ContainerAchievement = styled.div`
    background-color:#F0F2F5;
`;





export const ContainerImageAchievement = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

`;
export const BackgrounImgAchievement = styled.div`
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

export const ContainerDataAchievement = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  grid-column-gap: 5px;

`;


export const AchievementName = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8vw;
  @media (max-width: 980px) {
    font-size: 1.2vw;
  }

`;
export const AchievementDescription = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 0.6vw;
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


export const AchievementImg = styled.img`
  width:100%;
  height:100%;
`;
