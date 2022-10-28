import React from 'react'
import {

  Input,
} from 'reactstrap';
import Image from '../../img/skull.png'
import Star from '../../img/Star.png'
import{ContainerRateMembers,ContainerImageMember,BackgrounImgRateMembers,
  RateMemberImg,ContainerDataRateMembers,RateMemberName,RateMemberEmail,RateMemberRol,ContainerCalMember,ContainerSelect,ContainerImgRateCal,ImgSatar}from'./style'
export const RateMember = (props) => {
  return (
    <ContainerRateMembers MyGridTemplateColumns={'0.5fr 1fr 0.5fr 0.5fr'}>
        <ContainerImageMember>
            <BackgrounImgRateMembers>
              <RateMemberImg src={Image}>
              </RateMemberImg>
            </BackgrounImgRateMembers>
          </ContainerImageMember>
          <ContainerDataRateMembers>
            <RateMemberName>{props.Name}</RateMemberName>
            <RateMemberEmail>{props.Email}</RateMemberEmail>
          </ContainerDataRateMembers>
         <RateMemberRol>{props.Rol}</RateMemberRol>
         <ContainerCalMember>
           <ContainerSelect>
              <Input
              id="exampleSelect"
              name="select"
              type="select" >
              <option>
                1
              </option>
              <option>
                2
              </option>
              <option>
                3
                </option>
                <option>
                4
              </option>
              <option>
                5
                </option>
              </Input>
            </ContainerSelect>
            <ContainerImgRateCal>
              <ImgSatar src={Star}>
                </ImgSatar>
            </ContainerImgRateCal>
         </ContainerCalMember>
    </ContainerRateMembers>
  )
}
