import { GlobalComponentContainer } from '../../styles/global'
import { PriceHighlight, TableElement, TdElement, TrElement } from './styles'

export const TransactionsTable = () => {
  return (
    <GlobalComponentContainer>
      <TableElement>
        <tbody>
          <TrElement>
            <TdElement>{'Desenvolvimento de Site'}</TdElement>
            <TdElement>
              <PriceHighlight $type="income">{'R$ 12.000,00'}</PriceHighlight>
            </TdElement>
            <TdElement>{'Venda'}</TdElement>
            <TdElement>{'13/06/2023'}</TdElement>
          </TrElement>

          <TrElement>
            <TdElement>{'Aluguel do apartamento'}</TdElement>
            <TdElement>
              <PriceHighlight $type="outgo">{'R$ 1.200,00'}</PriceHighlight>
            </TdElement>
            <TdElement>{'Casa'}</TdElement>
            <TdElement>{'27/06/2023'}</TdElement>
          </TrElement>
        </tbody>
      </TableElement>
    </GlobalComponentContainer>
  )
}
