import React from 'react';
import { Main } from './pages/main';
import { CreateUser } from './pege/CreateUser/CreateUser';
import { LogIn } from './pege/LogIn/LogIn';
import { Modaltest } from './pege/ModalTest/ModalTest';
import { BrowserRouter as Router, Route, Routes,BrowserRouter} from 'react-router-dom';

import { Userpage } from './pege/Userpage/Userpage';
// import { Login } from './pages/login';

export const App = () => (
  <BrowserRouter>
    <div className="App">

        <Routes>

            {/* <Route exact path="/" element={<LogIn />}></Route>
            <Route exact path="/main" element={<Main />}></Route> */}

              <Route exact path="/" element={<LogIn />}></Route>
              <Route exact path="/CrearCuenta" element={<CreateUser />}></Route>
              <Route exact path="/User" element={<Userpage />}></Route>
              <Route exact path ="/Test" element={<Modaltest />}></Route>

        </Routes>

    </div>
  </BrowserRouter>
);
