import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/Transactions/Context'
import { GlobalComponentContainer } from '../../styles/global'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { PriceHighlight, TableElement, TdElement, TrElement } from './styles'

export const TransactionsTable = () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <GlobalComponentContainer>
      <TableElement>
        <tbody>
          {transactions.map((transaction) => (
            <TrElement key={transaction.id}>
              <TdElement>{transaction.description}</TdElement>
              <TdElement>
                <PriceHighlight $type={transaction.type}>
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </TdElement>
              <TdElement>{transaction.category}</TdElement>
              <TdElement>
                {dateFormatter.format(new Date(transaction.createdAt))}
              </TdElement>
            </TrElement>
          ))}
        </tbody>
      </TableElement>
    </GlobalComponentContainer>
  )
}
