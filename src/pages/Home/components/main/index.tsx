import { CoffeCard } from '../../../../components/CoffeCard'
import { MainContainer, Menu } from './style'

import { Coffes } from '../../../../data/CoffesProps'

export function MainContentHome() {
  return (
    <MainContainer className="container">
      <h1>Nossos cafés</h1>

      <Menu>
        {Coffes.map((coffe) => (
          <CoffeCard key={coffe.id} coffee={coffe} />
        ))}
      </Menu>
    </MainContainer>
  )
}
