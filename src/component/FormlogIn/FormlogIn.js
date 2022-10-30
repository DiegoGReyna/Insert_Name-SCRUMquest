import React,{useState}from 'react'
import { BackGoundContainer,h1LogIn } from './style.js'
import { Form,Button,FormGroup,Input,Label,Row ,Col} from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom';
import './Formstyle.css'
export const FormlogIn = () => {
  const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/User')


    }
  return (

    <BackGoundContainer>
      <div className='ContainerTitle'>
        <h1>¡Bienvenido!</h1>
      </div>

      <Form onSubmit={handleSubmit} className='FormLoging'>
        <FormGroup>
          <Label className="LabelInput" for="IdEmail">
            Correo electronico
          </Label>
          <Input className='InputLogIn'
            id="IdEmail"
            name="User"
            placeholder="Ingrese un correo electronico"
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
         <Col className='ColButtonLG' lg="6">
            <Button  type='submit'>
              Ingresar
            </Button>
          </Col>
          <Col className='ColButtonLG' lg="6">
            <Link className='LinkButton'to="/CreateUser">Registrarse</Link>
          </Col>
      </Row>
      </Form>


    </BackGoundContainer>
  )
}
