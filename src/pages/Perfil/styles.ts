import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    display: flex;
    align-items: center;    
    height: 144px;
    padding: 0 144px;
    background-color: rgba(255, 133, 155, 0.05);

    > button {
      width: 70px;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHTPINK};
      font-size: 16px;
      font-weight: normal;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > :nth-child(3), :nth-child(5) {
    margin-bottom: 16px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.LIGHTPINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
    }
  }
`