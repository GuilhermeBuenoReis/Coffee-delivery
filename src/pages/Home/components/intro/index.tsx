import {
  IntroContainer,
  IntroContent,
  TitleInformation,
  InformationForProduct,
  IconsSpan,
} from './style'

import imageIntro from '../../../../assets/Image.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <TitleInformation>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleInformation>

        <InformationForProduct>
          <div>
            <IconsSpan colorsIcons="yellowDark">
              <ShoppingCart size={20} color="white" />
            </IconsSpan>
            Compra simples e segura
          </div>

          <div>
            <IconsSpan colorsIcons="baseText">
              <Package size={20} color="white" />
            </IconsSpan>
            Entrega rápida e rastreada
          </div>

          <div>
            <IconsSpan colorsIcons="yellow">
              <Timer size={20} color="white" />
            </IconsSpan>
            Embalagem mantém o café intacto
          </div>

          <div>
            <IconsSpan colorsIcons="purple">
              <Coffee size={20} color="white" />
            </IconsSpan>
            O café chega fresquinho até você
          </div>
        </InformationForProduct>
      </IntroContent>

      <img src={imageIntro} alt="" />
    </IntroContainer>
  )
}
