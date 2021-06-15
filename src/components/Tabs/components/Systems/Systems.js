import React from 'react'


import * as S from './Systems.styles'
import { systemLabels } from './Systems.helpers'
import { SystemItem } from './components/SystemItem'

export const Systems = ({
  data
}) => {
  if (!data.systems) return null

  const getSubSystems = (systemId) => 
    data.subsystems.filter(el => el.system_id === systemId)

  return (
    <S.SystemsContainer>
      <S.Title>
        Systems
      </S.Title>
      <S.SystemsListHeader>
        {
          systemLabels.map((label, index) => (
            <S.HeaderLabel key={index}>
              { label.title}
            </S.HeaderLabel>
          ))
        }
      </S.SystemsListHeader>
      <S.SystemsList>
        {
          data.systems.map(system => (
            <SystemItem
              key={system.id}
              system={system}
              getSubSystems={getSubSystems}
            />
          ))
        }
      </S.SystemsList>
    </S.SystemsContainer>  
  )
}
