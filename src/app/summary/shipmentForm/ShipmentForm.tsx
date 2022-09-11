import { Grid, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@mantine/dates';

import { ShipmentFormData } from '@/app/summary/shipmentForm/ShipmentForm.types';
import { useStyles } from '@/app/summary/shipmentForm/ShipmentForm.styles';

/** @IMPROVEMENTS
 * 1. For zip code use API that returns exact city
 * 2. Use select for states
 * 3. Use common styles for inputs by applying them in theme
 * 4. Make focus state more visible
 * */
export const ShipmentForm = () => {
  const { classes } = useStyles();
  const { register, setValue } = useForm<ShipmentFormData>({});

  return (
    <div className={classes.wrapper}>
      <Stack>
        <Title order={1} transform={'uppercase'} mb={'lg'} color={'white'}>
          Shipping details
        </Title>
        <form>
          <Grid columns={12} gutter={'md'}>
            <Grid.Col span={6}>
              <TextInput className={classes.input} placeholder={'Your name'} label={'Name'} {...register('name')} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                className={classes.input}
                placeholder={'Your surname'}
                label={'Surname'}
                {...register('surname')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                className={classes.input}
                placeholder={'Your phone number'}
                label={'Phone Number'}
                {...register('phone')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                className={classes.input}
                placeholder={'Your email address'}
                label={'Email'}
                {...register('email')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <DatePicker
                className={classes.input}
                placeholder={'Your birth date'}
                label={'Date of birth'}
                {...register('dateOfBirth')}
                onChange={(val) => setValue('dateOfBirth', val)}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                className={classes.input}
                placeholder={'Your address'}
                label={'Address'}
                {...register('address')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput className={classes.input} placeholder={'Your city'} label={'City'} {...register('city')} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput className={classes.input} placeholder={'Your state'} label={'State'} {...register('state')} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                className={classes.input}
                placeholder={'Your zip code'}
                label={'Zip code'}
                {...register('zipcode')}
              />
            </Grid.Col>
          </Grid>
        </form>
      </Stack>
    </div>
  );
};
