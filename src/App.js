import React from 'react'


import * as S from './App.styles'
import {
  Tabs,
  Licenses,
  AddSystem
} from './components'

export const App = () => {
  return (
    <S.AppContainer>
      <Licenses />
      <Tabs />
      <AddSystem />
    </S.AppContainer>
  );
}
