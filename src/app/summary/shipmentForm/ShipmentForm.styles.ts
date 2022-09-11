import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  input: {
    '& label': {
      color: theme.white,
      marginBottom: 8,
    },
  },
  wrapper: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '45px',
  },
}));
