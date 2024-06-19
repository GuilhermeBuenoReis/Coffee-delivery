import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../components/CoffeCard'
import { produce } from 'immer'

export interface ICartItens extends Coffee {
  quantity: number
}

interface CartContextType {
  cartQuantity: number
  cartItens: ICartItens[]
  totalPriceInCart: number
  addCoffeeInCart: (coffee: ICartItens) => void
  coffeQuantityInCart: (coffeId: string, type: 'add' | 'decrease') => void
  removeCoffe: (coffeId: string) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState<ICartItens[]>([])

  const cartQuantity = cartItens.length

  const totalPriceInCart = cartItens.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeInCart(coffee: ICartItens) {
    const coffeAlreadyExistInCart = cartItens.findIndex(
      // find index senão encontrar nada retorna -1
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItens, (draft) => {
      if (coffeAlreadyExistInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeAlreadyExistInCart].quantity += coffee.quantity
      }
    })

    setCartItens(newCart)
  }

  function coffeQuantityInCart(coffeId: string, type: 'add' | 'decrease') {
    const newCart = produce(cartItens, (draft) => {
      const coffeAlreadyExistInCart = cartItens.findIndex(
        (cartItem) => cartItem.id === coffeId,
      )

      if (coffeAlreadyExistInCart >= 1) {
        const item = draft[coffeAlreadyExistInCart]
        draft[coffeAlreadyExistInCart].quantity =
          type === 'add' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItens(newCart)
  }

  function removeCoffe(coffeId: string) {
    const newCart = produce(cartItens, (draft) => {
      const coffeAlreadyExist = cartItens.findIndex(
        (cartItem) => cartItem.id === coffeId,
      )

      if (coffeAlreadyExist >= 1) {
        draft.splice(coffeAlreadyExist, 1)
      }
    })

    setCartItens(newCart)
  }

  function cleanCart() {
    setCartItens([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        addCoffeeInCart,
        cartQuantity,
        coffeQuantityInCart,
        cleanCart,
        removeCoffe,
        totalPriceInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
