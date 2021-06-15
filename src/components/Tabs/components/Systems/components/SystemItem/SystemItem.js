import React, { useState } from 'react'
import cx from 'classnames'


import * as S from './SystemItem.styles'
import { systemLabels, subsystemsLabels } from '../../Systems.helpers'
import { SubItem } from './components/SubItem'

export const SystemItem = ({
  system,
  getSubSystems
}) => {
  const [opened, setOpened] = useState(false)
  const [subsystems, setSubsystems] = useState(null)

  const onSystemOpen = () => {
    if (!subsystems) setSubsystems(getSubSystems(system.id))

    setOpened(!opened)
  }

  return (
    <S.SystemItemContainer>
      <S.SystemItem onClick={onSystemOpen}>
        <S.FlexContainer>
          <S.ExpanderIcon className={cx({ opened })}/>
          <S.SystemInfoContainer>
            {
              systemLabels.map((label, index) => (
                <S.SystemInfoText key={index}>
                  { system[label.key] }
                </S.SystemInfoText>
              ))
            }
          </S.SystemInfoContainer>
        </S.FlexContainer>
        <S.ActionsContainer>
          <S.ActionButton>
            Add License
          </S.ActionButton>
          <S.ActionButton className='remove'>
            Remove
          </S.ActionButton>
        </S.ActionsContainer>
      </S.SystemItem>
      {
        opened && subsystems &&
          <S.SystemSubItemsContainer>
            <S.SystemSubItemsHeader>
              {
                subsystemsLabels.map((subsystemsLabel, index) => (
                  <S.SystemSubItemsHeaderLabel key={index}>
                    { subsystemsLabel.title }
                  </S.SystemSubItemsHeaderLabel>  
                ))
              }
            </S.SystemSubItemsHeader>
            {
              subsystems.map((subsystem, index) => (
                <SubItem
                  key={index}
                  subsystem={subsystem}
                />  
              ))
            }
          </S.SystemSubItemsContainer>  
      }
    </S.SystemItemContainer>
  )
}