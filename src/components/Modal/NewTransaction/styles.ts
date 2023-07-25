import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled, { css } from 'styled-components'
import { defaultTheme } from '../../../styles/themes/default'

const appTheme = defaultTheme

const IncomeTypeButtonSelected = css`
  color: white;
  background-color: ${appTheme['green-500']};
`

const OutgoTypeButtonSelected = css`
  color: white;
  background-color: ${appTheme['red-500']};
`

export const NewTransactionModalSubmitButton = styled.button`
  height: 58px;
  margin-top: 1.5rem;
  padding-inline: 1.25rem;

  font-weight: bold;
  border: 0;
  border-radius: 6px;
  color: ${appTheme.white};
  background-color: ${appTheme['green-500']};

  cursor: pointer;

  transition: background-color 0.15s;
  &:not(:disabled):hover {
    background-color: ${appTheme['green-700']};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`

interface TypeButtonProps {
  $type: 'income' | 'outgo'
}

export const TypeButton = styled(RadioGroup.Item)<TypeButtonProps>`
  flex: 1;
  padding: 1rem;

  border: 0;
  border-radius: 6px;
  color: ${appTheme['gray-300']};
  background-color: ${appTheme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;

  &[data-state='checked'] {
    cursor: default;
    ${(props) =>
      props.$type === 'income'
        ? IncomeTypeButtonSelected
        : OutgoTypeButtonSelected}
  }

  &[data-state='unchecked'] {
    & > svg {
      color: ${(props) =>
        props.$type === 'income' ? appTheme['green-300'] : appTheme['red-300']};
    }

    &:hover {
      background-color: ${appTheme['gray-600']};
    }
  }
`

export const NewTransactionTypeButtonsContainer = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const NewTransactionModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.25rem;

  line-height: 0;
  border: 0;
  border-radius: 50%;
  color: ${appTheme['gray-500']};
  background-color: transparent;

  cursor: pointer;

  transition: color 0.15s;
  &:hover {
    color: ${appTheme['gray-300']};
  }
`

export const NewTransactionModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;
  background: ${appTheme['gray-800']};

  & > form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > input {
      padding: 1rem;

      border: 0;
      border-radius: 6px;
      color: ${appTheme['gray-300']};
      background-color: ${appTheme['gray-900']};

      &::placeholder {
        color: ${appTheme['gray-500']};
      }
    }

    & > input[type='number']::-webkit-inner-spin-button,
    & > input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const NewTransactionModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.75);
`
