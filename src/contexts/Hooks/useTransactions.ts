import { useContext } from 'react'
import { TransactionsContext } from '../Transactions/Context'

export const useTransactions = () => useContext(TransactionsContext)
