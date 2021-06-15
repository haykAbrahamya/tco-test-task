import styled from 'styled-components'


export const SubItemContainer = styled.div`
  display: flex;
  background: #1A1C1E;
  border-radius: 4px;
  padding: 6px 15px;
  justify-content: space-between;
  align-items: center;

  &:before {
    content: '';
    width: 30px;
    height: 6px;
    position: absolute;
    left: -30px;
    background: #161819;
  }
`

export const SubItemInfoText = styled.div`
  font-size: 16px;
  flex: 1;
`

export const SubItemInfoContainer = styled.div`
  display: flex;
  width: 100%;
`

export const DownloadButton = styled.div`
  padding: 6px 12px;
  cursor: pointer;
`