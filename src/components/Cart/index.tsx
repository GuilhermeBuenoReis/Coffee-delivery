import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddQuantityCart,
  AddToCartContent,
  CountCarting,
  IconWrapper,
  PriceContainer,
  QuantityCart,
} from './style'
import { defaultThemes } from '../../styles/themes/default'

interface Coffe {
  price: string
  quantity: number
  handleAddCoffeeInCart: () => void
  handleRemoveCoffeeInCart: () => void
  handleAddItemInCart: () => void
}

export function Cart({
  price,
  handleAddCoffeeInCart,
  handleAddItemInCart,
  handleRemoveCoffeeInCart,
  quantity,
}: Coffe) {
  return (
    <AddToCartContent>
      <PriceContainer>
        <p>R$</p> <p className="Price">{price}</p>
      </PriceContainer>

      <QuantityCart>
        <CountCarting>
          <IconWrapper
            onClick={handleRemoveCoffeeInCart}
            disabled={quantity <= 1}
          >
            <Minus />
          </IconWrapper>
          <span>{quantity}</span>
          <IconWrapper onClick={handleAddCoffeeInCart}>
            <Plus />
          </IconWrapper>
        </CountCarting>
        <AddQuantityCart>
          <button onClick={handleAddItemInCart}>
            <ShoppingCart
              size={24}
              height="fill"
              color={defaultThemes.baseCard}
            />
          </button>
        </AddQuantityCart>
      </QuantityCart>
    </AddToCartContent>
  )
}
