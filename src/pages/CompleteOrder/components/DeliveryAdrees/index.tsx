import { MapPinLine } from 'phosphor-react'
import {
  AddresContainer,
  DivMestra,
  CompleteOrderTitle,
  HeadContainer,
  InitialText,
  SecondText,
  FormContainer,
  Cep,
  Rua,
  NumberAdrres,
  Addres,
  BairroCidadeAddres,
  Uf,
} from './style'
import { OrderPayment } from '../OrderPayment'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddres() {
  const { register } = useFormContext()

  return (
    <DivMestra>
      <CompleteOrderTitle>Complete seu pedido</CompleteOrderTitle>
      <AddresContainer>
        <HeadContainer>
          <MapPinLine size={22} height="fill" />
          <div>
            <InitialText>Endereço de Entrega</InitialText>
            <SecondText>
              Informe o endereço onde deseja receber seu pedido
            </SecondText>
          </div>
        </HeadContainer>
        <FormContainer>
          <Cep type="text" placeholder="CEP" {...register('cep')} />
          <Rua type="text" placeholder="RUA" {...register('street')} />

          <NumberAdrres>
            <Cep type="number" placeholder="Número" {...register('number')} />
            <div>
              <Rua
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <p>Opcional</p>
            </div>
          </NumberAdrres>
          <Addres>
            <BairroCidadeAddres
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />
            <BairroCidadeAddres
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            <Uf type="text" placeholder="UF" {...register('uf')} />
          </Addres>
        </FormContainer>
      </AddresContainer>
      <OrderPayment />
    </DivMestra>
  )
}
