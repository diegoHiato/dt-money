import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTransactions } from '../../contexts/Hooks/useTransactions'
import { defaultTheme } from '../../styles/themes/default'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export const Summary = () => {
  const { transactions } = useTransactions()
  const summary = transactions.reduce(
    (accumulator, transaction) => {
      switch (transaction.type) {
        case 'income':
          accumulator.income += transaction.price
          accumulator.outcome += transaction.price
          break

        case 'outgo':
          accumulator.outgo += transaction.price
          accumulator.outcome -= transaction.price
          break

        default:
          return accumulator
      }

      return accumulator
    },
    {
      income: 0,
      outgo: 0,
      outcome: 0,
    },
  )

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
