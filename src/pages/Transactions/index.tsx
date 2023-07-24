import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Search } from '../../components/Form/Search'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from '../../components/TransactionsTable'
import { TransactionsContainer } from './styles'

export interface Transaction {
  id: string
  description: string
  type: 'income' | 'outgo'
  price: number
  category: string
  createdAt: string
}

const loadTransactions = async (
  dispatch: Dispatch<SetStateAction<Transaction[]>>,
) => {
  const response = await fetch('http://localhost:3000/transactions')
  const data = (await response.json()) as Transaction[]
  dispatch(data)
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    loadTransactions(setTransactions)
  }, [])

  return (
    <TransactionsContainer>
      <Summary />

      <main>
        <Search />
        <TransactionsTable transactions={transactions} />
      </main>
    </TransactionsContainer>
  )
}
