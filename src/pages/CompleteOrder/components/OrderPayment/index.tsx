import { useFormContext } from 'react-hook-form'
import {
  ChoicePaymentMethod,
  DescripitionPayment,
  HeaderPaymentContainer,
  PaymentCointaier,
  PaymentTitle,
} from './styles'
import { CurrencyDollar } from 'phosphor-react'
import { paymentMethods } from './paymentsMethods'

export function OrderPayment() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentCointaier>
      <HeaderPaymentContainer>
        <CurrencyDollar height="fill" size={22} />
        <div>
          <PaymentTitle>Pagamento</PaymentTitle>
          <DescripitionPayment>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </DescripitionPayment>
        </div>
      </HeaderPaymentContainer>

      <ChoicePaymentMethod>
        <button type="button" {...register('paymentMethod')} value="credit">
          {paymentMethods.credit.icon}
          <p>{paymentMethods.credit.label}</p>
        </button>
        <button type="button" {...register('paymentMethod')} value="debit">
          {paymentMethods.debit.icon}
          <p>{paymentMethods.debit.label}</p>
        </button>
        <button type="button" {...register('paymentMethod')} value="money">
          {paymentMethods.money.icon}
          <p>{paymentMethods.money.label}</p>
        </button>
      </ChoicePaymentMethod>

      {paymentMethodError && (
        <p style={{ color: 'red' }}>{paymentMethodError}</p>
      )}
    </PaymentCointaier>
  )
}
