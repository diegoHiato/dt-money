import * as Dialog from '@radix-ui/react-dialog'
import Logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../Modal/NewTransaction'
import { HeaderButton, HeaderContainer, HeaderElement } from './styles'

export const Header = () => {
  return (
    <HeaderElement>
      <HeaderContainer>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>New transaction</HeaderButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContainer>
    </HeaderElement>
  )
}
