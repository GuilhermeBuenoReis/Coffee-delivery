import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Ilustration from '../../assets/Illustration.png'
import { BackgroundIcon, CheckOut, FineshedContainer } from './style'

export function CheckOutOrder() {
  return (
    <CheckOut className="container">
      <div>
        <div>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>
          </div>

          <FineshedContainer>
            <div>
              <BackgroundIcon color="purple">
                <MapPin size={16} />
              </BackgroundIcon>
              <div>
                <p>Entrega em Rua João Daniel Martinelli, 102,</p>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            <div>
              <BackgroundIcon color="yellow">
                <Timer size={16} />
              </BackgroundIcon>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min </strong>
              </div>
            </div>
            <div>
              <BackgroundIcon color="yellowDark">
                <CurrencyDollar size={16} />
              </BackgroundIcon>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </FineshedContainer>
        </div>

        <img src={Ilustration} alt="Ilustration" />
      </div>
    </CheckOut>
  )
}
