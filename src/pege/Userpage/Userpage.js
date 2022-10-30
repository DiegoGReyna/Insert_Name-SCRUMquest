import React from 'react';
import { Navbarheader } from '../../component/Navbarheader/Navbarheader';
import { Navbargroups } from '../../component/Navbargroups/Navbargroups';
import { Containergroups } from '../../component/Containergroups/Containergroups';
import { Containergroupquest, ContainerUserpage } from './style';
import { Form, Button, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import './FormstyleU.module.css';
import { useState } from 'react';
import { NavbarheaderLogIn } from '../../component/NavbarheaderLogIn/NavbarheaderLogIn';
import { Route ,Routes } from 'react-router-dom';
import QuestDetail from '../../component/QuestDetail/QuestDetail';

export const Userpage = () => {
  const [showQuests, setShowQuests] = useState(true);

  const [openModalC,setOpenModalC]=useState(false);

  const handleShowQuests = () => {
    setShowQuests(!showQuests);
  };

  return (
    <ContainerUserpage>
      {/* <Navbarheader /> */}
        <NavbarheaderLogIn UserName="Diego31"/>
      <Containergroupquest>
        <Navbargroups />
        <Routes>
              <Route exact path="groups/*" element={<Containergroups showQuests={showQuests} handleShowQuests={handleShowQuests} />}></Route>
              {/* <Route exact path="groups/*" element={<Containergroups showQuests={showQuests} handleShowQuests={handleShowQuests} />}></Route> */}
              <Route exact path="groups/quests*" element={<QuestDetail/>}></Route>
        </Routes>

      </Containergroupquest>
      {/* groups/{id} */}
      {/*  */}
    </ContainerUserpage>
  );
};
