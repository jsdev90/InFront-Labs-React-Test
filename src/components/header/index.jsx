import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const Container = styled.div`
  background-color: #275ab5;
  height: 70px;
`

const Wrapper = styled.div`
  padding: 17px 152px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 1440px;
  margin: auto;
`

const LinkBtn = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  padding: 10px 24px;
  text-decoration: none;
  border-radius: 4px;
  background-color: ${props => props.active ? '#ffffff' : 'transparent'};
  color: ${props => props.active ? '#275ab5' : '#ffffff'};
`

const Header = ({ pathname }) =>
  <Container>
    <Wrapper>
      <img src={logo} alt="logo" />
      {pathname !== '/dashboard' && <div>
        <LinkBtn to="/login" active={pathname === '/login'} >Login</LinkBtn>
        <LinkBtn to="/" active={pathname === '/'}>Get Started</LinkBtn>
      </div>}
    </Wrapper>
  </Container>

Header.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Header
