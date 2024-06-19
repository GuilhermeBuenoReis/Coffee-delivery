import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.188rem;

  h1 {
    font-family: 'Ballo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${({ theme }) => theme.baseSubtitle};
  }
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
`
