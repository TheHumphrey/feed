import styled from 'styled-components'

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`

export const CommentAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
`

export const CommentBox = styled.div`
  flex: 1;
`

export const CommentContent = styled.div`
  background: ${({ theme }) => theme.colors.gray_700};
  border-radius: 8px;
  padding: 1rem;
`

export const CommentHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const CommentAuthorAndTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentAuthor = styled.strong`
  font-size: 0.875rem;
  line-height: 1.6;
`

export const PublishedTime = styled.time`
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray_400};
`

export const CommentButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.gray_400};
  border: 0;
  cursor: pointer;
  line-height: 0;
  border-radius: 2px;

  :hover {
    color: ${({ theme }) => theme.colors.red_500};
  }
`

export const CommentText = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.gray_300};
`

export const CommentFooter = styled.footer`
  margin-top: 1rem;
`

export const FooterButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.gray_400};
  cursor: pointer;

  display: flex;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.colors.green_300};
  }

  svg {
    margin-right: 0.5rem;
  }

  span::before {
    content: "\\2022";
    padding: 0 .25rem;
  }
`
