import { Button, Card, Center, Grid, Group, Image, ScrollArea, Stack, Text, Title } from '@mantine/core';

import { MinifigDetailsProps } from '@/app/summary/minifigDetails/MinifigDetails.types';
import noImage from '@/assets/nil_mf.webp';
import { useStyles } from '@/app/summary/minifigDetails/MinifigDetails.styles';

export const MinifigDetails = ({ minifig, parts, style }: MinifigDetailsProps) => {
  const { classes } = useStyles();

  return (
    <Card style={style} shadow={'md'} p={'md'} radius={'md'} className={classes.wrapper}>
      <Title order={2} weight={500} size={'xl'}>
        Summary
      </Title>
      <Group position={'center'} spacing={8}>
        <Image src={minifig.set_img_url || noImage} height={120} width={120} mt={'md'} />

        {!minifig.set_img_url && (
          <Text align={'center'} color={'dimmed'}>
            Placeholder image
          </Text>
        )}

        <Text weight={500} align={'center'}>
          {minifig.name}
        </Text>
      </Group>
      {parts?.length && (
        <Group mt={'lg'} mb={'lg'}>
          <Text>There are {parts.length} parts in this minifig:</Text>
          <Stack spacing={'lg'}>
            <ScrollArea.Autosize offsetScrollbars maxHeight={320} mx={'auto'} sx={{ width: 'auto' }}>
              {parts.map((part) => (
                <Grid columns={12} gutter={8} key={part.part.part_num}>
                  <Grid.Col span={'auto'}>
                    <Center>
                      <Image src={part.part.part_img_url} height={35} width={35} mr={'sm'} />
                    </Center>
                  </Grid.Col>
                  <Grid.Col span={10}>
                    <Stack spacing={0}>
                      <Text weight={500}>{part.part.name}</Text>
                      <Text weight={500} color={'yellow'}>
                        {part.part.part_num}
                      </Text>
                    </Stack>
                  </Grid.Col>
                </Grid>
              ))}
            </ScrollArea.Autosize>
            <Center mt={'xl'}>
              <Button radius={'xl'} size={'md'}>
                Summary
              </Button>
            </Center>
          </Stack>
        </Group>
      )}
    </Card>
  );
};
