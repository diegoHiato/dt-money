import { MagnifyingGlass } from 'phosphor-react'
import { GlobalComponentContainer } from '../../../styles/global'
import { SearchForm } from './styles'

export const Search = () => {
  return (
    <GlobalComponentContainer>
      <SearchForm action="">
        <input type="text" placeholder="Search for a transaction" />
        <button type="submit">
          <MagnifyingGlass size={20} weight="bold" />
          {'Search'}
        </button>
      </SearchForm>
    </GlobalComponentContainer>
  )
}
