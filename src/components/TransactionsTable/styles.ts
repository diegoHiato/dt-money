import styled from 'styled-components'

interface PriceHighlight {
  $type: 'income' | 'outgo'
}

export const PriceHighlight = styled.span<PriceHighlight>`
  color: ${(props) =>
    props.$type === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const TdElement = styled.td`
  flex: 1;
  padding: 1.25rem 2rem;
  background-color: ${(props) => props.theme['gray-700']};
`

export const TrElement = styled.tr`
  & > ${TdElement}:first-of-type {
    width: calc(max-content + 2rem);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  & > ${TdElement}:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

export const TableElement = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
`
