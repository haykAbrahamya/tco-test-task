import React from 'react'


import * as S from './SubItem.styles'
import { subsystemsLabels } from '../../../../Systems.helpers'

export const SubItem = ({
  subsystem
}) => {
  return (
    <S.SubItemContainer>
      <S.SubItemInfoContainer>
        {
          subsystemsLabels.map((subsystemsLabel, index) => (
            <S.SubItemInfoText key={index}>
              { subsystem[subsystemsLabel.key] }
            </S.SubItemInfoText>  
          ))
        }
      </S.SubItemInfoContainer>
      <S.DownloadButton>
        Download
      </S.DownloadButton>
    </S.SubItemContainer>  
  )
}