import styled from 'styled-components';


export const ContainerAchievements = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow:auto;
  gap: 10px;
  min-width: 90%;
  height:100%;
  justify-content: center;
  justify-items: center; */
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
