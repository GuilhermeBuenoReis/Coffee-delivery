import styled from 'styled-components'

export const PaymentCointaier = styled.div`
  max-width: 40rem;
  width: 100%;
  height: auto;
  padding: 2.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.baseCard};

  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
`
export const HeaderPaymentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
export const PaymentTitle = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['title-regular-m']};
  font-weight: bold;
  line-height: 130%;
`
export const DescripitionPayment = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-s']};
  font-weight: bold;
  line-height: 130%;
  color: ${({ theme }) => theme.baseText};
`
export const ChoicePaymentMethod = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  > button {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    border: none;
    cursor: pointer;

    background: ${({ theme }) => theme.baseButton};

    p {
      font-family: ${({ theme }) => theme.regular};
      font-size: ${({ theme }) => theme['text-bold-s']};
      font-weight: bold;
      line-height: 160%;
      color: ${({ theme }) => theme.baseText};
    }

    svg {
      color: ${({ theme }) => theme.purple};
    }
  }
`
