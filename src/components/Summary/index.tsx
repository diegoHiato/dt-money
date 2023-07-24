import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { defaultTheme } from '../../styles/themes/default'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>{'Income'}</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>{'Outgo'}</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']} />
        </header>

        <strong>{priceFormatter.format(summary.outgo)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>{'Outcome'}</span>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
