import styled from 'styled-components';



export const QuestName = styled.h2`



    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    text-align:center;
    font-size:1vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    @media (max-width: 980px) {
      font-size:1rem;

    }
`;

export const SubtitleRateMembers = styled.h3`
    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    width:90%;
    text-align:center;
    font-size:0.6vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    @media (max-width: 980px) {
      font-size:0.6rem;


    }
`;


export const ContainerRateMembers = styled.div`

  display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    flex-wrap: nowrap;
    gap: 10px;
    width: 90%;
    margin-top: 10px;
    padding:5px;
    overflow:auto;
    /* height:36rem; */
    height:30rem;
    @media (max-width: 980px) {
      height: 25rem;

      ::-webkit-scrollbar{
        width: 1rem !important;

    }
  }

      ::-webkit-scrollbar{
        width: 1.5rem;

    }
    ::-webkit-scrollbar-track{
        background-color: #F0F2F5;
        border-radius: 100vw;
        margin-block: 0.5em;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #1282A2;
        border-radius: 100vw;
        transition: all 0.4s;
        border: .25em solid #F0F2F5;
    }
    ::-webkit-scrollbar-thumb:hover{
        cursor: pointer;
        background-color:#30B61A;

    }
`;
