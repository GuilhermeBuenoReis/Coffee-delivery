import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  max-width: 123.75rem;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('src/assets/Background.png');
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 2rem;
`
export const TitleInformation = styled.section`
  width: 100%;
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.baseTitle};
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;

    color: ${({ theme }) => theme.baseSubtitle};
  }
`
export const InformationForProduct = styled.section`
  width: 100%;
  max-width: 35.438rem;
  height: 5.25rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  div {
    display: flex;
    align-items: center;

    gap: 0.75rem;
  }
`
const COLORS_ICONS = {
  yellowDark: 'yellowDark',
  baseText: 'baseText',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface IIconsSpan {
  colorsIcons: keyof typeof COLORS_ICONS
}

export const IconsSpan = styled.span<IIconsSpan>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${(props) => props.theme[COLORS_ICONS[props.colorsIcons]]};
`
