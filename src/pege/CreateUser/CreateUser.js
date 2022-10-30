import React from 'react'
import {BackGround } from '../LogIn/LogInStyle';
import {ContainerCreateUser,RowCreateUser} from './style'
import{Navbarheader} from "../../component/Navbarheader/Navbarheader"
import { Formcreateuser } from '../../component/Formcreateuser/Formcreateuser';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';
export const CreateUser = () => {
  return (
    <BackGround fluid className="w-100">
        <Navbarheader/>

          {/* <Container fluid className="h-75 justify-content-center mt-5" lg="12">
            <Row className="h-100 justify-content-center">
              <Col className="h-100" lg="6">
                <Formcreateuser />
              </Col>
              </Row>

          </Container> */}

          <ContainerCreateUser>
            <RowCreateUser>
               <Formcreateuser />
            </RowCreateUser>
          </ContainerCreateUser>


      </BackGround>
  )
}
