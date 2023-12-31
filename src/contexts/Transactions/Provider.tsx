import { ReactNode, useCallback, useEffect, useState } from 'react'
import { jsonServerApi } from '../../services/jsonServerApi'
import { NewTransactionData, Transaction, TransactionsContext } from './Context'

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const createTransaction = useCallback(
    async ({ description, price, category, type }: NewTransactionData) => {
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
    },
    [],
  )

  const fetchTransactions = useCallback(async (query?: string) => {
    await jsonServerApi
      .get<Transaction[]>('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
      .then(({ data }) => setTransactions(data))
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

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
