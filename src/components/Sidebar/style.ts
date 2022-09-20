import styled from 'styled-components'

export const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);
`

export const ProfileAvatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.gray_800};
  outline: 2px solid ${({ theme }) => theme.colors.green_500};
  background: ${({ theme }) => theme.colors.gray_800};
`

export const Name = styled.strong`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.gray_100};
  line-height: 1.6;
`

export const Role = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray_400};
  line-height: 1.6;
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.gray_600};
  margin-top: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const Link = styled.a`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.green_500};
  border: 1px solid ${({ theme }) => theme.colors.green_500};
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  :hover {
    background: ${({ theme }) => theme.colors.green_500};;
    color: ${({ theme }) => theme.colors.white};
    transition: color .1s, background-color .1s;
  }
`