import React,{useState}from 'react'
import { ContainerCreateUser ,CarImageUser,SubTitle,ImageUser,ContainerImg,InputFile,LabelInputFile} from './style'
import { Form,Button,FormGroup,Input,Label,Row ,Col,Card,CardBody,CardTitle,CardSubtitle ,CardText ,CardLink  } from 'reactstrap';

import "./Formcreateuser.css"
import { Link,useNavigate } from 'react-router-dom';
export const Formcreateuser = () => {
  const[imgPreview,setImgPreview]=useState(null);
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("iniciando secion")
    navigate('/User')
  }

  return (
    <ContainerCreateUser>
      <div className='ContainerTitle'>
        <h1>Registrar usuario</h1>
      </div>
        <Form onSubmit={handleSubmit} className='Formcreateuser' >
          <Row className="h-100" lg="12">
            <Col  lg="6">
              <Col className="h-100" lg="12">
                <CarImageUser>
                  <CardBody>
                    <SubTitle>Imagen de usuario</SubTitle>
                  </CardBody>
                  <ContainerImg>
                   <ImageUser >

                   </ImageUser>
                  </ContainerImg>
                  <CardBody>
                     <LabelInputFile htmlFor="InputFile" >Subir imagen</LabelInputFile>
                     <InputFile id='InputFile'  type="file" ></InputFile>
                  </CardBody>
                </CarImageUser>
            </Col>
            </Col>
            <Col lg="6">
            <Row className="h-100" lg="12">
              <FormGroup  >
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
              <Row className="justify-content-center" lg="12">
                <Col className='ColButton' lg="6">
                    <Button   type='submit'>Registrarse</Button>
                </Col>
                <Col className='ColButton' lg="6">
                    <Link className='LinkButton'to="/">Volver</Link>
                </Col>
            </Row>
            </Row>
            </Col>
          </Row>
        </Form>



{/* <Route exact path="/" element={<LogIn />}></Route>
<Route exact path="/main" element={<Main />}></Route> */}


    </ContainerCreateUser>
  )
}
