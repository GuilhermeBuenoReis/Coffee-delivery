import styled from 'styled-components'

export const AddToCartContent = styled.div`
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 0.25rem;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }

  .Price {
    font-family: 'Ballo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme.baseText};
  }
`
export const QuantityCart = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CountCarting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.baseButton};
  flex: 1;

  span {
    color: ${({ theme }) => theme.baseTitle};
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  svg {
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
  }

  button {
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
`
export const AddQuantityCart = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  background: ${({ theme }) => theme.purpleDark};
  border-radius: 6px;
  transition: 0.5s all;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.baseCard};
    cursor: pointer;
  }

  button {
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

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
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
`
