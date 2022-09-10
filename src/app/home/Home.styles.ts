import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

export const StyledHomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  margin-bottom: 2.2rem;
`;

const _StyledButton = styled(Button)`
  font-size: 1.1rem;
  width: 150px;
  box-shadow: 0 5px 8px -2px ${({ theme }) => theme.colors.dark[5]};
`;

export const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
