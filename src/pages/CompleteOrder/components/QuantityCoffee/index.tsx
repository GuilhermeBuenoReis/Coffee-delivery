import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CoffeeInformationContainer,
  IconWrapper,
  Line,
  MinusRemove,
  NameCoffee,
  PriceCoffee,
} from './style'
import { ICartItens } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
import { formatMoney } from '../../../../utils/FormatMoney'

interface InformationCoffees {
  coffee: ICartItens
}

export function QuantityCoffee({ coffee }: InformationCoffees) {
  const [quantity, setQuantity] = useState(1)

  function handleAddCoffeQuantityInCart() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseCoffeQuantityInCart() {
    setQuantity((state) => state - 1)
  }

  const { removeCoffe } = useCart()

  function handleRemoveCoffeById() {
    removeCoffe(coffee.id)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <>
      <CoffeeInformationContainer>
        <img src={`/coffees/${coffee.src}`} alt="" />

        <div>
          <NameCoffee>{coffee.name}</NameCoffee>
          <MinusRemove>
            <div>
              <IconWrapper
                onClick={handleDecreaseCoffeQuantityInCart}
                disabled={quantity <= 1}
              >
                <Minus />
              </IconWrapper>
              <span>{quantity}</span>
              <IconWrapper onClick={handleAddCoffeQuantityInCart}>
                <Plus />
              </IconWrapper>
            </div>

            <div>
              <IconWrapper onClick={handleRemoveCoffeById}>
                <Trash size={24} />
              </IconWrapper>
              <span>Remover</span>
            </div>
          </MinusRemove>
        </div>
        <PriceCoffee>R$ {formattedPrice}</PriceCoffee>
      </CoffeeInformationContainer>
      <Line></Line>
    </>
  )
}
