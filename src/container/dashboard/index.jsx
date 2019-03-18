import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 22px 152px;
  box-sizing: border-box;
`

const Greetings = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #4a4a4a;
  margin: 0;
  padding-bottom: 18px;
`

const Wrapper = styled.div`
  height: 415px;
  border-radius: 4px;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`

const Title = styled.div`
  padding: 0 22px;
  height: 55px;
  line-height: 55px;
  border-bottom: solid 2px #dddddd;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #4a4a4a;
`

class Dashboard extends React.PureComponent {
  render() {
    return (
      <Container>
        <Greetings>Greetings, FULL NAME! </Greetings>
        <Wrapper>
          <Title>Dashboard</Title>
        </Wrapper>
      </Container>
    )
  }
}

export default Dashboard
