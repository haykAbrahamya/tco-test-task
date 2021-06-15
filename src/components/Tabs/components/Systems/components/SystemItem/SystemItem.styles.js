import styled from 'styled-components'


import Expander from '../../../../../../images/expander.svg'

export const SystemItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: calc(100% - 78px);
    background: #161819;
    top: 45px;
    left: 15px;
  }
`

export const SystemItem = styled.div`
  display: flex;
  background: #1A1C1E;
  height: 15px;
  padding: 15px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`

export const ExpanderIcon = styled.div`
  width: 8px;
  height: 12px;
  background: url(${Expander});

  &.opened {
    transform: rotate(90deg);
  }
`

export const SystemInfoText = styled.div`
  font-size: 14px;
  flex: 1;

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`

export const SystemInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 15px;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const ActionButton = styled.div`
  padding: 6px 10px;
  border-radius: 4px;
  background: #499861;

  &.remove {
    background: #CC4343;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const SystemSubItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  margin-left: 45px;
  position: relative;
  gap: 8px;
`

export const SystemSubItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  width: calc(100% - 125px);
`

export const SystemSubItemsHeaderLabel = styled.div`
  font-size: 12px;
  opacity: 0.6;
  flex: 1;
`