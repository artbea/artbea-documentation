import React from 'react'
import { Box } from 'src/components/ui-blocks'

import { FooterBody } from './FooterBody'
import { SocialIcons } from './SocialIcons'
import { Copyright } from './Copyright'

const Footer = ({ data }) => (
  <Box backgroundStyles={{
    position: 'relative',
    paddingBottom: 0,
    backgroundImage: 'none',
    backgroundColor: 'black',
    '@media (max-width: 568px)': {
      paddingTop: '20px'
    }
  }}
  >
    <FooterBody data={data} />
    <SocialIcons data={data} />
    <Copyright />
  </Box>
)

export { Footer }
