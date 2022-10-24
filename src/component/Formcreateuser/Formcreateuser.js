import React,{useState}from 'react'
import { ContainerCreateUser } from './style'
import { Form,Button,FormGroup,Input,Label,Row ,Col,Card,CardBody,CardTitle,CardSubtitle ,CardText ,CardLink  } from 'reactstrap';

import "./Formcreateuser.css"
import { Link } from 'react-router-dom';
export const Formcreateuser = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("iniciando secion")
  }

  return (
    <ContainerCreateUser lg="12">
      <div className='ContainerTitle'>
        <h1>Registrar usuario</h1>
      </div>

        <Form onSubmit={handleSubmit} className='Formcreateuser' >
          <Row lg="12">
            <Col lg="6">
              <Row lg="12">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>

                  </CardBody>
                  <img
                    alt="Card cap"
                    src="https://picsum.photos/318/180"
                    width="100%"
                  />
                  <CardBody>
                    <CardLink href="#">
                      Card Link
                    </CardLink>
                    <CardLink href="#">
                      Another Link
                    </CardLink>
                  </CardBody>
                </Card>
            </Row>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Label className="LabelInput" for="IdEmail">
                  Correo electronico
                </Label>
                <Input className='InputLogIn'
                  id="IdEmail"
                  name="Email"
                  placeholder="Ingrese algun Correo"
                  type="Email"
              />
                </FormGroup>
                <FormGroup>
                  <Label className="LabelInput" for="IdUser">
                    Contraseña
                  </Label>
                  <Input className='InputLogIn'
                    id="IdUser"
                    name="User"
                    placeholder="Ingrese un nombre de usuario"
                    type="text"
                  />
              </FormGroup>
              <FormGroup>
                  <Label className="LabelInput" for="IdPassword">
                    Contraseña
                  </Label>
                  <Input className='InputLogIn'
                    id="IdPassword"
                    name="Password"
                    placeholder="Ingrese una contraseña"
                    type="password"
                  />
              </FormGroup>
              <FormGroup>
                  <Label className="LabelInput" for="IdConfirPassword">
                    Confirmar contraseña
                  </Label>
                  <Input className='InputLogIn'
                    id="IdConfirPassword"
                    name="ConfirPassword"
                    placeholder="Confirmar contraseña"
                    type="password"
                  />
              </FormGroup>
              <Row lg="12">
                <Col className='ColButton' lg="6">
                    <Button  type='submit'>Registrarse</Button>
                </Col>
                <Col className='ColButton' lg="6">
                    <Link className='LinkButton'to="/">Volver</Link>
                </Col>
            </Row>
            </Col>
          </Row>
        </Form>



{/* <Route exact path="/" element={<LogIn />}></Route>
<Route exact path="/main" element={<Main />}></Route> */}


    </ContainerCreateUser>
  )
}
