import { Card, Image, Center, Button, Text, clsx, Group } from '@mantine/core';

import { useStyles } from './MinifigCard.styles';

import noImage from '@/assets/nil_mf.webp';
import { MinifigCardProps } from '@/ui/minifigCard/MinifigCard.types';
import { stopBubbling } from '@/utils/stopBubbling';

export const MinifigCard = ({ minifig, isSelected, onClick }: MinifigCardProps) => {
  const { classes } = useStyles();
  console.log(minifig.set_url);

  return (
    <div tabIndex={0} onClick={() => onClick(minifig)}>
      <Card
        shadow={'md'}
        p={'md'}
        radius={'md'}
        className={clsx(classes.cardWrapper, { [classes.selectedCard]: isSelected })}
      >
        <Center>
          <Image src={minifig.set_img_url || noImage} height={160} width={160} mt={'md'} />
        </Center>

        <Text weight={500} className={classes.cardName} mt={'md'} align={'center'}>
          {minifig.name}
        </Text>

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
