import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '3rem',
    color: theme.white,
    fontWeight: 'bold',
    marginBottom: '2.2rem',
  },
  ctaButton: {
    fontSize: '1.1rem',
    width: 150,
    boxShadow: `0 5px 8px -2px ${theme.colors.dark[5]}`,
  },
}));
