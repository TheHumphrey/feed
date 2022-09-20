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
`

export const Name = styled.strong``

export const Role = styled.span``

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
`