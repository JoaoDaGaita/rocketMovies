import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 123px;
  gap: 64px;

  border-bottom: 1px solid #3E3B47;

  .profile {
    display: flex;
    gap: 9px;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHTPINK};
  }

  .profile > div {
    display: flex;
    flex-direction: column;
    padding: 16px 0;
  }

  div > strong {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
  }
  
  div > a {
    text-align: end;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .profile > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
  }
`