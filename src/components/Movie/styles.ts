import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  gap: 15px;
  
  list-style: none;
  background-color: rgba(255, 133, 155, 0.05);

  > p {
    font-size: 16px;
    line-height: auto;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`
export const Header = styled.div`  
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
  }  
`