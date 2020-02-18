import React from 'react'
import Media from 'react-media'
import { getImage } from 'src/assets'
import { MenuLink, MenuLinkExternal } from 'src/components/ui-blocks'

import { FooterRow } from './FooterRow'
import { FooterMenu } from './FooterMenu'
import { FooterGraphic } from './FooterGraphic'

const FooterBody = ({ data }) => (
  <FooterRow css={{
    '@media (min-width: 568px)': {
      alignSelf: 'flex-start',
      marginLeft: '55px'
    }
  }}
  >
    <FooterMenu
      title='artbea' css={{
        alignSelf: 'flex-start'
      }}
    >
      <MenuLinkExternal
        css={{
          margin: 0,
          '&:hover': {
            color: 'white'
          }
        }} href='https://artbea.photo/galleries' target='_blank'
      >Galleries
      </MenuLinkExternal>
    </FooterMenu>
    <FooterMenu
      title='documentation' css={{
        alignSelf: 'flex-start',
        '@media (min-width: 568px)': {
          marginLeft: '80px'
        }
      }}
    >
      <MenuLink to='/welcome'>About</MenuLink>
      <MenuLink to='/developers/contributing'>Contributing</MenuLink>
    </FooterMenu>
    <Media
      query='(min-width: 800px)' render={() => (
        <FooterGraphic imageUrl={getImage(data, 'artbea-footer-graphic')} />
      )}
    />
  </FooterRow>
)

export { FooterBody }
