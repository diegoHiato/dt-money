import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { SummaryCard, SummaryContainer } from './styles'

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>{'Income'}</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']} />
        </header>

        <strong>{'R$ 17.400,00'}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>{'Outgo'}</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']} />
        </header>

        <strong>{'R$ 1.259,00'}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>{'Outcome'}</span>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </header>

        <strong>{'R$ 16.141,00'}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
