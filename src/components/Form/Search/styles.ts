import styled from 'styled-components'

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;

  & > input {
    flex: 1;
    padding: 1rem;

    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  & > button {
    padding: 0.875rem 2rem;

    line-height: 0;
    font-weight: bold;
    color: ${(props) => props.theme['green-300']};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;

    transition: color 0.15s, background-color 0.15s, border-color 0.15s;
    &:hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
