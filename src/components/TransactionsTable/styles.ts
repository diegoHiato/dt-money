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
  max-width: 240px;
  padding: 1.25rem 2rem;
  background-color: ${(props) => props.theme['gray-700']};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`

export const TrElement = styled.tr`
  & > ${TdElement}:first-of-type {
    width: 50%;
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
