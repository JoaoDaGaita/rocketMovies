import styled from 'styled-components'
import backgroundMovie from '../../assets/backgroundMovie.png'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  
  align-items: start;
  justify-content: center;

  > div {
    margin: 10px;
  }

  div > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.LIGHTPINK};
  }
  
  div> h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  div > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  div > button {
    margin-bottom: 42px;
    margin-top: 24px;
  }

  div > a {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHTPINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundMovie}) no-repeat center center;
  background-size: cover;
  font-size: 16px;
`