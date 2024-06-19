import { ConfirmContainer } from './style'
import { DeliveryAddres } from './components/DeliveryAdrees'
import { ConfirmOrder } from './components/ConfirmOrder'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { zodResolver } from '@hookform/resolvers/zod'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const InformationForValidationSchema = zod.object({
  cep: zod.string().min(3, 'Informe seu CEP'),
  street: zod.string().min(1, 'Informe a sua Rua'),
  number: zod.string().min(1, 'Informe o número da sua casa'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe seu bairro'),
  city: zod.string().min(1, 'Informe sua cidade'),
  uf: zod.string().min(1, 'Informe a UF'),

  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o métodod de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof InformationForValidationSchema>

type confirmOrderFormData = OrderData

export function CompleteOrder() {
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(InformationForValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: confirmOrderFormData) {
    navigate('/CheckOutOrder', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <ConfirmContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <DeliveryAddres />
        <ConfirmOrder onConfirmOrder={handleSubmit(handleConfirmOrder)} />
      </ConfirmContainer>
    </FormProvider>
  )
}
