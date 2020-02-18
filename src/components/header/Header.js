import React from 'react'
import styled from '@emotion/styled'
import headerLogo from 'src/images/artbea-logo.png'

import { MenuLinkExternal } from 'src/components/ui-blocks'

const Logo = styled.div({
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '20px'
})

const LogoImg = styled.img({
  margin: 0
})

const LogoText = styled.p({
  display: 'inline-block',
  margin: 0,
  color: '#555',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '12pt',
  marginLeft: '10px',
  whiteSpace: 'nowrap'
})

const Menu = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-end',
  alignItems: 'center'
})

const HyperWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  zIndex: 0,
  width: '100%',
  backgroundImage: 'none',
  backgroundColor: 'white'
})

const Wrapper = styled.div({
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  backgroundImage: 'none',
  backgroundColor: 'white'
})

const Header = () => (
  <HyperWrapper>
    <Wrapper>
      <Logo>
        <LogoImg alt='artbea logo' src={headerLogo} width='52px' />
        <LogoText>artbea documentation</LogoText>
      </Logo>
      <Menu>
        <MenuLinkExternal href='https://github.com/artbea/artbea-documentation' target='_blank'>Github</MenuLinkExternal>
        <MenuLinkExternal href='https://twitter.com/artbea_photo' target='_blank'>Twitter</MenuLinkExternal>
        {/* <MenuLink
        css={{
          margin: '5px 20px'
        }} to='/developers/contributing' target='_blank'
      >Blog
      </MenuLink> */}
      </Menu>
    </Wrapper>
  </HyperWrapper>
)

export { Header }
