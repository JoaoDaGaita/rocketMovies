import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 17px 0;
  background-color: ${({ theme }) => theme.COLORS.LIGHTPINK};
  border: 0;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
`