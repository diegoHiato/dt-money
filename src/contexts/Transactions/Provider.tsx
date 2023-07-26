import { ReactNode, useEffect, useState } from 'react'
import { jsonServerApi } from '../../services/jsonServerApi'
import { Transaction, TransactionsContext } from './Context'

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    await jsonServerApi
      .get<Transaction[]>('/transactions', {
        params: { q: query },
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
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
