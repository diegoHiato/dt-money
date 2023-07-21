import styled from 'styled-components'
import { GlobalComponentContainer } from '../../styles/global'

export const HeaderButton = styled.button`
  height: 50px;

  font-weight: bold;
  padding-inline: 1.25rem;

  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};

  cursor: pointer;

  transition: background-color 0.15s;
  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const HeaderContainer = styled(GlobalComponentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderElement = styled.header`
  padding: 2.5rem 0 7.5rem;

  background-color: ${(props) => props.theme['gray-900']};
`
