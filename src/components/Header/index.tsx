import { HeaderContainer, Location, Cart } from './style'
import Logo from '../../../public/coffees/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer className="container">
      <NavLink to="/" title="back to home">
        <img src={Logo} alt="" />
      </NavLink>

      <div>
        <Location>
          <MapPin size={20} />
          Porto Alegre, RS
        </Location>
        <NavLink to="CompleteOrder" title="Carrinho de compras">
          <Cart>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}

            <ShoppingCart size={20} />
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
