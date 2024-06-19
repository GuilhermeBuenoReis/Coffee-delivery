import styled from 'styled-components'
import { defaultThemes } from '../../styles/themes/default'

export const CheckOut = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4rem;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h1 {
        font-family: ${({ theme }) => theme.title};
        font-size: ${({ theme }) => theme['title-title-l']};
        font-weight: 800;
        color: ${({ theme }) => theme.yellowDark};
        line-height: 130%;
      }
      h3 {
        font-family: ${({ theme }) => theme.regular};
        font-size: ${({ theme }) => theme['text-regular-l']};
        font-weight: 800;
        color: ${({ theme }) => theme.baseSubtitle};
        line-height: 130%;
      }
    }
  }
`
export const FineshedContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-family: ${({ theme }) => theme.regular};
      font-size: ${({ theme }) => theme['title-regular-m']};
      font-weight: 400;
      color: ${({ theme }) => theme.baseText};
      line-height: 130%;
    }
  }
`
interface BackgroundIconProps {
  color: 'purple' | 'yellow' | 'yellowDark'
}

const Colors = (color: BackgroundIconProps['color']) => {
  switch (color) {
    case 'purple':
      return defaultThemes.purple
    case 'yellow':
      return defaultThemes.yellow
    case 'yellowDark':
      return defaultThemes.yellowDark
  }
}

export const BackgroundIcon = styled.div<BackgroundIconProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;

  background: ${({ color }) => Colors(color)};

  svg {
    color: ${({ theme }) => theme.background};
  }
`
