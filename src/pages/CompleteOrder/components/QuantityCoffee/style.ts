import styled from 'styled-components'

export const CoffeeInformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.25rem 0.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const MinusRemove = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    background-color: ${({ theme }) => theme.baseButton};
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
    }

    button:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }

  span {
    color: ${({ theme }) => theme.baseTitle};
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`
export const Line = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.baseButton};
  margin: 1.5rem 0;
`
export const NameCoffee = styled.p`
  color: ${({ theme }) => theme.baseSubtitle};
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-m']};
  font-weight: bold;
  line-height: 130%;
`
export const PriceCoffee = styled.p`
  color: ${({ theme }) => theme.baseText};
  font-family: ${({ theme }) => theme.title};
  font-size: ${({ theme }) => theme['title-title-m']};
  font-weight: bold;
  line-height: 130%;
`
export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;

  background: none;
  color: ${({ theme }) => theme.purpleDark};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.purpleLigth};
  }

  &:focus {
    border: none;
  }
`
