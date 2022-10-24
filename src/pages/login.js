import React, { Fragment } from 'react';
import LoginForm from '../components/forms/loginForm';
import { useNavigate  } from "react-router-dom";
import logo from './../res/logo.png';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';
import { View } from './../components/page/view/view';
import { LOGIN_PAGE } from './../utils/colors';
import Store from '../utils/store';
import store2 from 'store2';
export const Login = () => {
  let navigate = useNavigate();
  return (
    <View theme={LOGIN_PAGE} banner={''}>
      <Container fluid className="h-100 mt-5">
        <Row className='flex-grow-1 justify-content-center h-100"'>
          <Col lg="6">
            <Card >
              <CardTitle>Bienvenido</CardTitle>
              <CardBody>
                <Container>
                  <Row>
                    <Col md="12" className="text-center">
                    </Col>
                    <Col md="12">
                      <LoginForm
                        onLogin={(email, password) => {
                          const store = new Store();
                          console.log(`${email} ${password}`);
                          store.Login(email, password, (response) => {
                            console.log(response);
                            store2.set('TOKEN', response.token);
                            navigate("/main");
                          });
                        }}
                      ></LoginForm>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </View>
  );
};
