import { Card, Image, Button, Text, clsx, Group } from '@mantine/core';

import { useStyles } from './MinifigCard.styles';

import noImage from '@/assets/nil_mf.webp';
import { MinifigCardProps } from '@/ui/minifigCard/MinifigCard.types';
import { stopBubbling } from '@/utils/stopBubbling';

export const MinifigCard = ({ minifig, isSelected, onClick }: MinifigCardProps) => {
  const { classes } = useStyles();

  return (
    <div tabIndex={0} onClick={() => onClick(minifig)}>
      <Card
        shadow={'md'}
        p={'md'}
        radius={'md'}
        className={clsx(classes.cardWrapper, { [classes.selectedCard]: isSelected })}
      >
        <Group position={'center'} spacing={8}>
          <Image src={minifig.set_img_url || noImage} height={160} width={160} mt={'md'} />

          {!minifig.set_img_url && (
            <Text align={'center'} color={'dimmed'}>
              Placeholder image
            </Text>
          )}

          <Text weight={500} className={classes.cardName} align={'center'}>
            {minifig.name}
          </Text>
        </Group>

        <Button
          component={'a'}
          href={minifig.set_url}
          target={'_blank'}
          variant={'subtle'}
          color={'yellow'}
          onClick={stopBubbling}
          className={classes.btn}
        >
          Show details
        </Button>
      </Card>
    </div>
  );
};
