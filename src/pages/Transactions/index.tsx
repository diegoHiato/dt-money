import { Search } from '../../components/Form/Search'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from '../../components/TransactionsTable'
import { TransactionsContainer } from './styles'

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Summary />

      <main>
        <Search />
        <TransactionsTable />
      </main>
    </TransactionsContainer>
  )
}
