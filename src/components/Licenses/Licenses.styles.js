import styled from 'styled-components'


import freeLicenseIcon from '../../images/free_license.svg'
import proLicenseIcon from '../../images/pro_license.svg'
import vipLicenseIcon from '../../images/vip_license.svg'

export const LicensesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: min-content;
`

export const Title = styled.div`
  font-size: 28px;
`

export const PlansList = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 30px;
  align-items: center;
`

export const PlanItem = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 0.25;

  &.active {
    opacity: 1;

    .name-background {
      opacity: 1;
    }
  }

  &.free_license {
    background: url(${freeLicenseIcon});
  }

  &.pro_license {
    background: url(${proLicenseIcon});
  }

  &.vip_license {
    background: url(${vipLicenseIcon});
  }
`

export const ItemNameBackground = styled.div`
  width: 56px;
  height: 20px;
  top: 9px;
  opacity: 0.25;
  text-align: center;
  position: absolute;
  background: #131718;
`

export const RightPart = styled.div`
  display: flex;
`

export const UpgradeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #18A7FF;
  border-radius: 3px;
  padding: 8px 20px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  align-self: center;
  cursor: pointer;
`