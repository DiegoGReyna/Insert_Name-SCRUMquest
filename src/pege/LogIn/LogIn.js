import React from 'react'
import { useNavigate  } from "react-router-dom";
import {BackGround } from './LogInStyle';
import{Navbarheader} from "../../component/Navbarheader/Navbarheader"
import { FormlogIn } from '../../component/FormlogIn/FormlogIn';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';
export const LogIn = () => {
  return (
      <BackGround fluid className="w-100">
        <Navbarheader/>

          <Container fluid className="h-75 justify-content-center mt-5" lg="12">
           <Row className="h-100 justify-content-center">
              <Col className="h-75" lg="6">

              <FormlogIn/>

              </Col>

              </Row>

          </Container>

      </BackGround>
  )
}
