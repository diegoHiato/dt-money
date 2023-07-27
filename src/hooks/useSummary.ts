import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/Transactions/Context'

export const useSummary = () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )
  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary
}
