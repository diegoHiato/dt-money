import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { Transaction, TransactionsContext } from './Context'

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async (
    dispatch: Dispatch<SetStateAction<Transaction[]>>,
  ) => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = (await response.json()) as Transaction[]
    dispatch(data)
  }

  useEffect(() => {
    loadTransactions(setTransactions)
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
