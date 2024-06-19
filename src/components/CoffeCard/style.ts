import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 16rem;
  max-height: 19.375rem;

  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.baseCard};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    max-width: 7.5rem;
    max-height: 7.5rem;

    width: 100%;
    height: 100vh;
  }

  border-radius: 6px 36px 6px 36px;
`
export const InformationNameType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.75rem;

  img {
    margin-top: -4rem;
  }
`

export const TypeCoffeTitle = styled.span`
  background: ${({ theme }) => theme.yellowLigth};
  padding: 0.5rem 0.25rem;
  border-radius: 100px;

  > p {
    font-size: 0.625rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.yellowDark};
  }
`
export const CoffeName = styled.div`
  width: 13.5rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.25rem;
    font-family: 'Ballo 2', sans-serif;
    line-height: 130%;
    font-weight: bold;
    color: ${({ theme }) => theme.baseSubtitle};
  }
`
export const DescriptionCoffe = styled.div`
  width: 13.5rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-weight: 400;
    color: ${({ theme }) => theme.baseLabel};
    text-align: center;
  }
`
