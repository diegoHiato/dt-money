import { useTransactions } from '../contexts/Hooks/useTransactions'

export const useSummary = () => {
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

  return summary
}
