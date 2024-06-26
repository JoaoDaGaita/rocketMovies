import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    background: transparent;
    border: 0;
    
    padding: 16px 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`