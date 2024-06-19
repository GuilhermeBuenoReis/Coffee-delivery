import styled from 'styled-components'

export const DivMestra = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const AddresContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  height: auto;
  padding: 2.5rem;
  border-radius: 0.375rem;

  background: ${({ theme }) => theme.baseCard};
`
export const CompleteOrderTitle = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['title-title-xs']};
  font-weight: bold;
  line-height: 130%;
  margin-bottom: 0.75rem;
`
export const HeadContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.yellowDark};
  }

  margin-bottom: 2rem;
`

export const InitialText = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['title-regular-m']};
  font-weight: bold;
  line-height: 130%;
`
export const SecondText = styled.p`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-s']};
  font-weight: bold;
  line-height: 130%;
  color: ${({ theme }) => theme.baseText};
`
export const FormContainer = styled.form`
  display: flex;

  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
export const BaseInput = styled.input`
  font-family: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme['text-regular-s']};
  font-weight: bold;
  line-height: 130%;
  color: ${({ theme }) => theme.baseLabel};
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: none;
  input {
    ::placeholder {
      color: ${({ theme }) => theme.baseText};
    }
  }
`

export const Cep = styled(BaseInput)`
  width: 12.5rem;
`
export const Rua = styled(BaseInput)`
  width: 100%;
  flex: 1;
`

export const NumberAdrres = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    input {
      flex: 1;
    }

    p {
      position: absolute;
      right: 0.625rem;
      font-family: ${({ theme }) => theme.regular};
      font-size: ${({ theme }) => theme['text-bold-s']};
      font-weight: bold;
      line-height: 130%;
      font-style: italic;
    }
  }
`
export const Addres = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const BairroCidadeAddres = styled(BaseInput)`
  flex: 1;
`
export const Uf = styled(BaseInput)`
  max-width: 3.75rem;
  width: 100%;
`
