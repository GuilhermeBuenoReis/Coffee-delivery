import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const CartLocationBased = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.938rem;
  border-radius: 4px;
`
export const Location = styled(CartLocationBased)`
  gap: 0.675rem;
  background: ${({ theme }) => theme.purpleLight};

  > svg {
    color: ${({ theme }) => theme.purple};
  }
`
export const Cart = styled(CartLocationBased)`
  position: relative;
  background: ${({ theme }) => theme.yellowLigth};

  > svg {
    color: ${({ theme }) => theme.yellowDark};
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;

    background: ${({ theme }) => theme.yellowDark};
    color: ${({ theme }) => theme.yellowLigth};
  }
`
export const QuantityProductsInCart = styled.span`
  display: block;
`
