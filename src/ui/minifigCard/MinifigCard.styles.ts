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
      transform: 'scale(1.03)',
      transformOrigin: '50% 50%',
      outline: `4px solid ${theme.colors.yellow[7]}`,

      outlineOffset: 4,
    },
  },
  selectedCard: {
    outline: `4px solid ${theme.colors.green[7]}`,
    zIndex: 1,

    outlineOffset: 4,
    transform: 'scale(1.07)',

    '&:hover, &:focus': {
      transform: 'scale(1.07)',
      outline: `4px solid ${theme.colors.green[7]}`,
      outlineOffset: 4,
    },
  },
  btn: {
    marginTop: 'auto',
    justifySelf: 'flex-end',
  },
}));
