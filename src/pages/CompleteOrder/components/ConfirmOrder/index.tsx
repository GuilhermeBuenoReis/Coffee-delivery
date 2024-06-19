import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/FormatMoney'
import { QuantityCoffee } from '../QuantityCoffee'
import {
  ConfirmButton,
  ConfirmOrderContainer,
  OrderContainer,
  PriceTotal,
  PriceTotalAdrees,
  TextTotal,
  Title,
  TotalOrderContainer,
  TotalPrice,
} from './style'

const DELIVERY_PRICE = 3.5

interface ConfirmOrderProps {
  onConfirmOrder: () => void
}

export function ConfirmOrder({ onConfirmOrder }: ConfirmOrderProps) {
  const { totalPriceInCart, cartQuantity, cartItens } = useCart()

  const cartTotal = DELIVERY_PRICE + totalPriceInCart

  const formattedItemsTotal = formatMoney(totalPriceInCart)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <OrderContainer>
      <Title>Cafés selecionados</Title>
      <ConfirmOrderContainer>
        {cartItens.map((item) => (
          <QuantityCoffee key={item.id} coffee={item} />
        ))}

        <TotalOrderContainer>
          <div>
            <TextTotal>Total de itens</TextTotal>
            <PriceTotalAdrees>R$ {formattedItemsTotal}</PriceTotalAdrees>
          </div>
          <div>
            <TextTotal>Entrega</TextTotal>
            <PriceTotalAdrees>R$ {formattedDeliveryPrice}</PriceTotalAdrees>
          </div>
          <div>
            <TotalPrice>Total</TotalPrice>
            <PriceTotal>R$ {formattedCartTotal}</PriceTotal>
          </div>
          <ConfirmButton
            disabled={cartQuantity <= 0}
            type="submit"
            onClick={onConfirmOrder}
          >
            Confirmar pedido
          </ConfirmButton>
        </TotalOrderContainer>
      </ConfirmOrderContainer>
    </OrderContainer>
  )
}
