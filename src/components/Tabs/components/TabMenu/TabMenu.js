import React from 'react'
import cx from 'classnames'


import * as S from './TabMenu.styles'

export const TabMenu = ({
  tabs,
  activeTab,
  setActiveTab
}) => {
  return (
    <S.TabMenuContainer>
      {
        tabs.map((tab, index) => {
          const isTabActive = activeTab.title === tab.title

          return (
            <S.TabMenuItem
              key={index}
              className={cx({ active: isTabActive })}
              onClick={() => setActiveTab(tab)}
            >
              { tab.title }
              {
                isTabActive &&
                  <S.TabBorder />   
              }
            </S.TabMenuItem>
          )
        })
      }
    </S.TabMenuContainer>  
  )
}