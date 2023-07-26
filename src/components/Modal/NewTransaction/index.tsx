import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useTransactions } from '../../../contexts/Hooks/useTransactions'
import {
  NewTransactionModalCloseButton,
  NewTransactionModalContent,
  NewTransactionModalOverlay,
  NewTransactionModalSubmitButton,
  NewTransactionTypeButtonsContainer,
  TypeButton,
} from './styles'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outgo']),
})

type NewTransactionForm = zod.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const { createTransaction } = useTransactions()
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionForm>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateTransaction(data: NewTransactionForm) {
    const { description, price, type, category } = data
    await createTransaction({ description, price, type, category }).then(() =>
      reset(),
    )
  }

  return (
    <Dialog.Portal>
      <NewTransactionModalOverlay />

      <NewTransactionModalContent>
        <NewTransactionModalCloseButton>
          <X size={24} weight="bold" />
        </NewTransactionModalCloseButton>
        <Dialog.Title>{'New transaction'}</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Value amount"
            step={0.01}
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <NewTransactionTypeButtonsContainer
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <TypeButton value="income" $type="income">
                    <ArrowCircleUp size={24} />
                    {'Income'}
                  </TypeButton>

                  <TypeButton value="outgo" $type="outgo">
                    <ArrowCircleDown size={24} />
                    {'Outgo'}
                  </TypeButton>
                </NewTransactionTypeButtonsContainer>
              )
            }}
          />

          <NewTransactionModalSubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            {'Submit'}
          </NewTransactionModalSubmitButton>
        </form>
      </NewTransactionModalContent>
    </Dialog.Portal>
  )
}
