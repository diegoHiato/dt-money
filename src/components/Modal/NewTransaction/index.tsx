import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  NewTransactionModalCloseButton,
  NewTransactionModalContent,
  NewTransactionModalOverlay,
  NewTransactionModalSubmitButton,
  NewTransactionTypeButtonsContainer,
  TypeButton,
} from './styles'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <NewTransactionModalOverlay />

      <NewTransactionModalContent>
        <NewTransactionModalCloseButton>
          <X size={24} weight="bold" />
        </NewTransactionModalCloseButton>
        <Dialog.Title>{'New transaction'}</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Value amount" required />
          <input type="text" placeholder="Category" required />

          <NewTransactionTypeButtonsContainer>
            <TypeButton value="income" $type="income">
              <ArrowCircleUp size={24} />
              {'Income'}
            </TypeButton>

            <TypeButton value="outgo" $type="outgo">
              <ArrowCircleDown size={24} />
              {'Outgo'}
            </TypeButton>
          </NewTransactionTypeButtonsContainer>

          <NewTransactionModalSubmitButton type="submit">
            {'Submit'}
          </NewTransactionModalSubmitButton>
        </form>
      </NewTransactionModalContent>
    </Dialog.Portal>
  )
}
