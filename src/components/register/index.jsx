import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../../shared/input'

const Container = styled.div`
  width: 725px;
  height: 415px;
  border-radius: 4px;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 0 20px;
`

const StyledStep = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffffff;
    width: 26px;
    height: 26px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    background-color: #9b9b9b;
    border-radius: 50%;
    margin-right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    color: #4a4a4a;
    line-height: 55px;
    margin: 0;
  }
`

const RegisterFrom = styled.form`
  padding: 0 23px;
  & > input:first-child {
    margin-top: 45px;
  }
`

const SignUpBtn = styled.button`
  margin-top: 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  border-radius: 4px;
  background-color: #275ab5;
  padding: 10px 30px;
  color: #ffffff;
  display: block;
  &:hover {
    cursor: pointer;
  }
`

const Register = () =>
  <Container>
    <StyledStep>
      <span>1</span>
      <p>Create your account</p>
    </StyledStep>
    <RegisterFrom>
      <StyledInput type="text" name="fullName" placeholder="Full Name" />
      <StyledInput type="text" name="companyName" placeholder="Company Name" />
      <StyledInput type="email" name="email" placeholder="Email" />
      <StyledInput type="password" name="password" placeholder="Password" />
      <SignUpBtn>Sign Up with Email</SignUpBtn>
    </RegisterFrom>
  </Container>

export default Register
