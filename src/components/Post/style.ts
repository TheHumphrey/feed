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

export const AuthorAvatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.gray_800};
  outline: 2px solid ${({ theme }) => theme.colors.green_500};
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