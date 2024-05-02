import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 0 auto;
    padding: 50px 124px;
  }
`

export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 32px;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    width: 207px;
  }
`

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 50px;
`