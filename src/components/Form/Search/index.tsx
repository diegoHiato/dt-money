import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useTransactions } from '../../../contexts/Hooks/useTransactions'
import { GlobalComponentContainer } from '../../../styles/global'
import { SearchForm } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchForm = zod.infer<typeof searchFormSchema>

export const Search = () => {
  const { fetchTransactions } = useTransactions()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchForm>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchForm) {
    fetchTransactions(data.query)
  }

  return (
    <GlobalComponentContainer>
      <SearchForm onSubmit={handleSubmit(handleSearchTransaction)}>
        <input
          type="text"
          placeholder="Search for a transaction"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} weight="bold" />
          {'Search'}
        </button>
      </SearchForm>
    </GlobalComponentContainer>
  )
}
