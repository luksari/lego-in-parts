import { ReactNode } from 'react';
import { Container } from '@mantine/core';

import { useStyles } from './Layout.styles';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={'lg'} px={'xs'}>
        {children}
      </Container>
    </div>
  );
};
