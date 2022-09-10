import { ReactNode } from 'react';

import { StyledWrapper } from './Layout.styles';

export const Layout = ({ children }: { children: ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
