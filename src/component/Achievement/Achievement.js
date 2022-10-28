import React from 'react'
import Image from '../../img/Logo.png'
import {BackgroundAchievement,AchievementImg,ContainerAchievement,ContainerImageAchievement,AchievementName,AchievementDescription,AchievementStatus,ContainerDataAchievement,BackgrounImgAchievement} from './style'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Row ,Col ,Container
} from 'reactstrap';
export const Achievements = (props) => {
  return (
    <BackgroundAchievement>
          <ContainerImageAchievement>
                  <BackgrounImgAchievement>
                    <AchievementImg src={Image}>
                    </AchievementImg>
                  </BackgrounImgAchievement>
          </ContainerImageAchievement>
          <ContainerDataAchievement>
          <AchievementName>{props.Name}</AchievementName>
          <AchievementDescription>{props.Description}</AchievementDescription>
          </ContainerDataAchievement>
          <AchievementStatus>{props.Status}</AchievementStatus>

    </BackgroundAchievement>
  )
}
