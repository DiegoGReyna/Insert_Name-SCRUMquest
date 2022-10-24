import React from 'react'
import { BackGoundContainer,h1LogIn } from './style.js'
import { Form,Button,FormGroup,Input,Label,Row ,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Formstyle.css'
export const FormlogIn = () => {
  return (

    <BackGoundContainer>
      <div className='ContainerTitle'>
        <h1>¡Bienvenido!</h1>
      </div>

      <Form className='FormLoging'>
        <FormGroup>
          <Label className="LabelInput" for="IdUser">
            Nombre de usuario
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
            name="password"
            placeholder="Ingrese una contraseña"
            type="password"
          />
      </FormGroup>

      <Row lg="12">
         <Col className='ColButton' lg="6">
            <Button to="/CrearCuenta" type='submit'>
              Ingresar
            </Button>
          </Col>
          <Col className='ColButton' lg="6">
            <Link className='LinkButton'to="/CrearCuenta">Registrarse</Link>
          </Col>
      </Row>
      </Form>


    </BackGoundContainer>
  )
}
