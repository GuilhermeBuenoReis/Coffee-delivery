import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { Cart } from '../Cart'
import {
  CardContainer,
  TypeCoffeTitle,
  CoffeName,
  InformationNameType,
  DescriptionCoffe,
} from './style'
import { formatMoney } from '../../utils/FormatMoney'

export interface Coffee {
  id: string
  typeCoffe: string
  name: string
  description: string
  src: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleAddCoffeeInCart() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveCoffeeInCart() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeInCart } = useCart()

  function handleAddItemInCart() {
    const addCoffe = {
      ...coffee,
      quantity,
    }

    addCoffeeInCart(addCoffe)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CardContainer>
      <InformationNameType>
        <div>
          <img src={`/coffees/${coffee.src}`} alt="" />
        </div>
        <TypeCoffeTitle>
          <p>{coffee.typeCoffe}</p>
        </TypeCoffeTitle>
        <CoffeName>
          <p>{coffee.name}</p>
        </CoffeName>
        <DescriptionCoffe>
          <p>{coffee.description}</p>
        </DescriptionCoffe>
        <Cart
          price={formattedPrice}
          handleAddCoffeeInCart={handleAddCoffeeInCart}
          handleRemoveCoffeeInCart={handleRemoveCoffeeInCart}
          handleAddItemInCart={handleAddItemInCart}
          quantity={quantity}
        />
      </InformationNameType>
    </CardContainer>
  )
}
