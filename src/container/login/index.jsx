import React from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { StyledInput } from '../../shared/input'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`

const Wrapper = styled.div`
  width: 415px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
`

const Header = styled.div`
  background-color: #275ab5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 0;
`

const LoginContent = styled.div`
  padding: 16px 36px;
`

const Title = styled.p`
  font-family: 'Roboto Slab', serif;
  font-size: 19px;
  font-weight: bold;
  color: #4a4a4a;
  margin: 0;
`

const DontHaveAccount = styled.div`
  margin-top: 13px;
  margin-bottom: 29px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  span {
    color: #4a4a4a;
  }
  a {
    color: #ee7d22;
    text-decoration: none;
  }
`

const ForgotPwd = styled(Link)`
  padding-top: 3px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #ee7d22;
  text-decoration: none;
`

const SignInBtn = styled.button`
  border-radius: 4px;
  background-color: #275ab5;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  display: block;
  width: 345px;
  padding: 10px 0;
  margin-bottom: 20px;
  margin-top: 45px;
  &:hover {
    cursor: pointer;
  }
`

class Login extends React.PureComponent {

  state = {
    goToDashboard: false
  }

  handleSignIn = () => {
    this.setState({ goToDashboard: true })
  }

  render() {

    if (this.state.goToDashboard) {
      return <Redirect to="/dashboard" />
    }

    return (
      <Container>
        <Wrapper>
          <Header>
            <img src={logo} alt="login-logo"/>
          </Header>
          <LoginContent>
            <Title>Sign in to your InFront Labs account</Title>
            <DontHaveAccount>Don’t have an account? <Link to="/">Create one.</Link> </DontHaveAccount>
            <StyledInput type="email" name="email" placeholder="Email" />
            <StyledInput type="password" name="password" placeholder="Password" />
            <ForgotPwd>Forgot password?</ForgotPwd>
            <SignInBtn onClick={this.handleSignIn}>Sign In</SignInBtn>
          </LoginContent>
        </Wrapper>
      </Container>
    )
  }
} 

export default Login
