import React from 'react';
import { Main } from './pages/main';
import { CreateUser } from './pege/CreateUser/CreateUser';
import { LogIn } from './pege/LogIn/LogIn';
import { BrowserRouter as Router, Route, Routes,BrowserRouter} from 'react-router-dom';
// import { Login } from './pages/login';

export const App = () => (
  <BrowserRouter>
    <div className="App">

        <Routes>

            {/* <Route exact path="/" element={<LogIn />}></Route>
            <Route exact path="/main" element={<Main />}></Route> */}

              <Route exact path="/" element={<LogIn />}></Route>
              <Route exact path="/CrearCuenta" element={<CreateUser />}></Route>


        </Routes>

    </div>
  </BrowserRouter>
);
