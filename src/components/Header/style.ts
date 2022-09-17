import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.gray_800};
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;

  img {
    height: 2rem;
  }
`