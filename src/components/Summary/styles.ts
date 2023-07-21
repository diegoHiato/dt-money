import styled from 'styled-components'
import { GlobalComponentContainer } from '../../styles/global'

export const SummaryCard = styled.div`
  padding: 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-600']};

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['gray-300']};

    & > span {
      cursor: default;
    }
  }

  & > strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;

    cursor: default;
  }
`

export const SummaryContainer = styled(GlobalComponentContainer)`
  margin-top: -5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;

  & > ${SummaryCard}:last-of-type {
    background-color: ${(props) => props.theme['green-700']};
  }
`
