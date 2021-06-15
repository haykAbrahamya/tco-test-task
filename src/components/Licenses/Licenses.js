import React from 'react'
import cx from 'classnames'


import * as S from './Licenses.styles'
import { plans } from '../../data.json'

export const Licenses = () => {
  return (
    <S.LicensesContainer>
      <S.Title>
        Licenses
      </S.Title>
      <S.RightPart>
        <S.PlansList>
          {
            plans.map(plan => (
              <S.PlanItem
                key={plan.slug}
                className={cx({ active: plan.active }, plan.slug)}
              >
                <S.ItemNameBackground className='name-background'>
                  { plan.name }
                </S.ItemNameBackground>
              </S.PlanItem>
            ))
          }
        </S.PlansList>
        <S.UpgradeButton>
          Upgrade Now
        </S.UpgradeButton>
      </S.RightPart>
    </S.LicensesContainer>
  )
}