import { createContext } from 'use-context-selector'

export interface Transaction {
  id: string
  description: string
  type: 'income' | 'outgo'
  price: number
  category: string
  createdAt: string
}

export interface NewTransactionData {
  description: Transaction['description']
  price: Transaction['price']
  category: Transaction['category']
  type: Transaction['type']
}

interface TransactionsContextType {
  transactions: Transaction[]
  createTransaction: (newTransactionData: NewTransactionData) => Promise<void>
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)
