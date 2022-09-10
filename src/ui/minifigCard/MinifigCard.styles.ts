import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  cardName: {
    width: 200,
    marginBottom: 'auto',
  },
  cardWrapper: {
    transition: 'all 150ms ease-out',
    minHeight: 400,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',

    '&:hover, &:focus': {
      transform: 'scale(1.05)',
      transformOrigin: '50% 50%',
      boxShadow: `0 0 4px 4px ${theme.colors.yellow[7]}`,
    },
  },
  selectedCard: {
    boxShadow: `0 0 4px 4px ${theme.colors.green[7]}`,
    transform: 'scale(1.05)',

    '&:hover, &:focus': {
      boxShadow: `0 0 4px 4px ${theme.colors.green[7]}`,
    },
  },
  btn: {
    marginTop: 'auto',
    justifySelf: 'flex-end',
  },
}));
