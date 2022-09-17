import { HeaderContainer } from './style'

import igniteLogo from '../../assets/ignite-logo.svg'

export const Header = () => {
  return (
    <HeaderContainer >
      <img src={igniteLogo} alt="Logo tipo do Ignite" />
    </HeaderContainer>
  )
}