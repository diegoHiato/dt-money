import { createContext } from 'react'

export interface Transaction {
  id: string
  description: string
  type: 'income' | 'outgo'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)
