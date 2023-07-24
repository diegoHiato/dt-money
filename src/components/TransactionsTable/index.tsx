import { Transaction } from '../../pages/Transactions'
import { GlobalComponentContainer } from '../../styles/global'
import { PriceHighlight, TableElement, TdElement, TrElement } from './styles'

interface TransactionsTableProps {
  transactions: Transaction[]
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <GlobalComponentContainer>
      <TableElement>
        <tbody>
          {transactions.map((transaction) => (
            <TrElement key={transaction.id}>
              <TdElement>{transaction.description}</TdElement>
              <TdElement>
                <PriceHighlight
                  $type={transaction.type}
                >{`R$ ${transaction.price},00`}</PriceHighlight>
              </TdElement>
              <TdElement>{transaction.category}</TdElement>
              <TdElement>{transaction.createdAt}</TdElement>
            </TrElement>
          ))}
        </tbody>
      </TableElement>
    </GlobalComponentContainer>
  )
}
