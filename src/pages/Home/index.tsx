import { Intro } from './components/intro'
import { MainContentHome } from './components/main'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <MainContentHome />
    </HomeContainer>
  )
}
