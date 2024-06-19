import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ConfirmOrderContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  height: auto;
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  background: ${({ theme }) => theme.baseCard};
`
export const Title = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['title-title-xs']};
  font-weight: bold;
  line-height: 130%;
  margin-bottom: 0.75rem;
`
export const TotalOrderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const PriceTotalAdrees = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-m']};
  font-weight: bold;
  line-height: 130%;
`
export const TextTotal = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-s']};
  font-weight: bold;
  line-height: 130%;
`
export const TotalPrice = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-bold-l']};
  font-weight: bold;
  line-height: 130%;
  color: ${({ theme }) => theme.baseSubtitle};
`
export const PriceTotal = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-l']};
  font-weight: bold;
  line-height: 130%;
  color: ${({ theme }) => theme.baseSubtitle};
`
export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  background: ${({ theme }) => theme.yellow};
  color: white;
  border: none;

  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['components-button-g']};
  font-weight: bold;
  line-height: 160%;

  border-radius: 0.375rem;
  cursor: pointer;
`
