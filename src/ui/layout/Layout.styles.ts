import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.violet[9]};
`;
