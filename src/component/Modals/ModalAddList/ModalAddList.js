import React from 'react'
import {
  Button,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';
import { BackGroundModal,ModalCard,GroupModalCol,ModalForm,TitleModal ,ModalRowReverse ,RowCenter } from '../Modalcreategroup/style';

export const ModalAddList = ({CloseModalModalAddList }) => {
  return (
    <BackGroundModal>

    <ModalCard MyWidth={"50%"} MyHeight={"50%"} MyGridTemplateRows={"5% 30% 60%"}>
        <ModalRowReverse>
         <Button onClick={()=>CloseModalModalAddList(false)}  >X</Button>
        </ModalRowReverse>
        <TitleModal>Agregar Lista</TitleModal>

        <ModalForm onSubmit={''}>
                <GroupModalCol MyWidth={"100%"} MyJustifyItems={"center"}>

                    <FormGroup className='w-75'>
                      <Label className="LabelInput" for="IdList">
                        Nombre de lista
                      </Label>
                      <Input className='InputLogIn'
                      id="IdList"
                      name="Listname"
                      placeholder="Ingrese un Nombre para la lista"
                        type="text"
                        />
                    </FormGroup>
                    <RowCenter MyGridTemplateColumns="20% 20%" MyGap="5px">
                          <Button   name="cancel"
                          onClick={()=>CloseModalModalAddList(false)} >Cancelar</Button>
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
