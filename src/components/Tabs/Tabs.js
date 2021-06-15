import React, { useState } from 'react'


import * as S from './Tabs.styles'
import {
  TabMenu,
  Systems
} from './components'
import { tabs } from '../../data.json'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[2])

  return (
    <S.TabsContainer>
      <TabMenu
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Systems data={activeTab.data}/>
    </S.TabsContainer>    
  )
}