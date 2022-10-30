import React from 'react'
import {
  Button,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';
import { BackGroundModal,ModalCard,GroupModalCol,ModalForm,TitleModal ,ModalRowReverse ,RowCenter } from '../Modalcreategroup/style';


export const ModalAddRol = ({CloseModalModalAddRol}) => {
  return (
    <BackGroundModal>

    <ModalCard MyWidth={"50%"} MyHeight={"50%"} MyGridTemplateRows={"5% 30% 60%"}>
        <ModalRowReverse>
         <Button onClick={()=>CloseModalModalAddRol(false)}  >X</Button>
        </ModalRowReverse>
        <TitleModal>Agregar rol</TitleModal>

        <ModalForm onSubmit={''}>
                <GroupModalCol MyWidth={"100%"} MyJustifyItems={"center"}>

                    <FormGroup className='w-75'>
                      <Label className="LabelInput" for="IdRol">
                        Nombre del rol
                      </Label>
                      <Input className='InputLogIn'
                      id="IdRol"
                      name="Rolname"
                      placeholder="Ingrese un Nombre para el rol"
                        type="text"
                        />
                    </FormGroup>
                    <RowCenter MyGridTemplateColumns="20% 20%" MyGap="5px">
                          <Button   name="cancel"
                          onClick={()=>CloseModalModalAddRol(false)} >Cancelar</Button>
                          <Button   type='submit'  >Crear</Button>
                          </RowCenter>
                  </GroupModalCol>
              </ModalForm>
        <RowCenter>
        </RowCenter>
    </ModalCard>
</BackGroundModal>
  )
}
