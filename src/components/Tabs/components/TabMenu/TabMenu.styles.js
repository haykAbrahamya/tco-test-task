import styled from 'styled-components'


export const TabMenuContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(139, 144, 145, 0.25);
  gap: 45px;
  padding: 0px 15px;
`

export const TabMenuItem = styled.div`
  padding: 22px 15px;
  cursor: pointer;
  opacity: 0.6;
  position: relative;

  &.active {
    opacity: 1;
  }
`

export const TabBorder = styled.div`
  width: 100%;
  height: 2px;
  background: #18A7FF;
  position: absolute;
  bottom: -1px;
  left: 0px;
`