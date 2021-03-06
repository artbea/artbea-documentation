import styled from '@emotion/styled'
import { Link } from 'gatsby'

const MenuLink = styled(Link)({
  display: 'inline-block',
  color: '#ff6699',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '10pt',
  '&:hover': {
    color: 'white',
    textDecoration: 'none'
  }
})

export { MenuLink }
