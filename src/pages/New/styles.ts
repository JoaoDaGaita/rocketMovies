import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    padding: 40px 123px 85px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  main > div {
    display: flex;
    flex-direction: column;
  }

  main > section {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  div > button {
      width: 70px;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHTPINK};
      font-size: 16px;
      font-weight: normal;
  }

  h1 {
    color: white;
  }

`