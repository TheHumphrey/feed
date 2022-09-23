import styled from 'styled-components'

export const ProfilePic = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.gray_800};
  outline: 2px solid ${({ theme }) => theme.colors.green_500};
`

export const ProfilePicWithOutBorder = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray_800};
`