import React from 'react'
import styled from 'styled-components'
import Register from '../../components/register'

const Contaienr = styled.div`
  padding: 41px 167px;
  display: flex;
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
`

const FAQ = styled.div`
  margin-left: 37px;
  max-width: 343px;
`

const FAQTitle = styled.p`
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  font-weight: bold;
  color: #4a4a4a;
  margin: 0;
  padding-bottom: 8px;
`

const Question = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #ee7d22;
  margin: 0;
  padding: 4px 0;
`

const Answer = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
  margin: 0;
`

const FAQs = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Maecenas varius justo justo, interdum ornare lectus condimentum eu. Proin in justo porttitor mi volutpat laoreet. Mauris interdum euismod maximus.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Maecenas varius justo justo, interdum ornare lectus condimentum eu. Proin in justo porttitor mi volutpat laoreet. Mauris interdum euismod maximus.'
  }
]

const Home = () =>
  <Contaienr>
    <Register />
    <FAQ>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {FAQs.map((item, index) => 
        <div key={index}>
          <Question>{item.question}</Question>
          <Answer>{item.answer}</Answer>
        </div>
      )}
    </FAQ>
  </Contaienr>

export default Home
