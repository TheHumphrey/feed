import styled from 'styled-components'

export const PostContainer = styled.article`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }
`

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ProfileAuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorName = styled.strong`
  color: ${({ theme }) => theme.colors.gray_100};
  line-height: 1.6;
`

export const AuthorRole = styled.span`
  font-size: .875rem;
  color: ${({ theme }) => theme.colors.gray_400};
  line-height: 1.6;
`

export const PublishedTime = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray_400};
`

export const PostContent = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray_300};
  margin-top: 1rem;
`

export const ContentText = styled.p`
  margin-top: 1rem;
`

export const ContentTextLink = styled.a`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.green_500};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.green_300};
  }
`

export const CommentForm = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_600};

  :focus-within footer{
    visibility: visible;
    max-height: none;
  }
`

export const CommentStrong = styled.strong`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray_100};
`

export const CommentTextArea = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray_700};
  border: 0;
  resize: none;
  height: 6rem;
  padding: 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray_100};
  line-height: 1.4;
  margin-top: 1rem;
`

export const Footer = styled.footer`
  visibility: hidden;
  max-height: 0;
`

export const CommentButton = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.green_300};
    transition: background-color 0.1s;
  }
`

export const CommentListContainer = styled.div`
  margin-top: 2rem;
`