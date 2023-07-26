import { ReactNode, useEffect, useState } from 'react'
import { jsonServerApi } from '../../services/jsonServerApi'
import { NewTransactionData, Transaction, TransactionsContext } from './Context'

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction({
    description,
    price,
    category,
    type,
  }: NewTransactionData) {
    await jsonServerApi
      .post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })
      .then(({ data: newTransaction }) =>
        setTransactions((previous) => [newTransaction, ...previous]),
      )
  }

  async function fetchTransactions(query?: string) {
    await jsonServerApi
      .get<Transaction[]>('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
      .then(({ data }) => setTransactions(data))
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
