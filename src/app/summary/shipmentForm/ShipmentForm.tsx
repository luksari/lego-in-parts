import { Grid, Input, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@mantine/dates';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import { useEffect } from 'react';

import { ShipmentFormData, ShipmentFormProps } from '@/app/summary/shipmentForm/ShipmentForm.types';
import { useStyles } from '@/app/summary/shipmentForm/ShipmentForm.styles';
import { validationSchema } from '@/app/summary/shipmentForm/ShipmentForm.utils';

/** @IMPROVEMENTS
 * 1. For zip code use API that returns exact city
 * 2. Use select for states
 * 3. Use common styles for inputs by applying them in theme
 * 4. Make focus state more visible
 * 5. Extract input mask to separate component
 * */
export const ShipmentForm = ({ onSubmit, onValidate }: ShipmentFormProps) => {
  const { classes } = useStyles();
  const { register, setValue, formState, handleSubmit } = useForm<ShipmentFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    onValidate(!Object.keys(formState.errors).length);
  }, [formState, onValidate]);

  return (
    <div className={classes.wrapper}>
      <Stack>
        <Title order={1} transform={'uppercase'} mb={'lg'} color={'white'}>
          Shipping details
        </Title>
        <form id={'shipment-form'} onSubmit={handleSubmit(onSubmit)}>
          <Grid columns={12} gutter={'md'}>
            <Grid.Col span={6}>
              <TextInput
                className={classes.input}
                placeholder={'Your name'}
                label={'Name'}
                {...register('name')}
                error={formState.errors.name?.message}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                className={classes.input}
                placeholder={'Your surname'}
                label={'Surname'}
                error={formState.errors.surname?.message}
                {...register('surname')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Input.Wrapper className={classes.input} label={'Phone number'} error={formState.errors.phone?.message}>
                <Input
                  component={InputMask}
                  mask={'+9 (999) 999-99-99'}
                  maskPlaceholder={null}
                  placeholder={'Your phone number'}
                  {...register('phone')}
                />
              </Input.Wrapper>
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                className={classes.input}
                placeholder={'Your email address'}
                label={'Email'}
                error={formState.errors.email?.message}
                {...register('email')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <DatePicker
                className={classes.input}
                placeholder={'Your birth date'}
                label={'Date of birth'}
                error={formState.errors.dateOfBirth?.message}
                {...register('dateOfBirth')}
                onChange={(val) =>
                  setValue('dateOfBirth', val, { shouldValidate: true, shouldDirty: true, shouldTouch: true })
                }
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                className={classes.input}
                placeholder={'Your address'}
                label={'Address'}
                error={formState.errors.address?.message}
                {...register('address')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                className={classes.input}
                placeholder={'Your city'}
                label={'City'}
                error={formState.errors.city?.message}
                {...register('city')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                className={classes.input}
                placeholder={'Your state'}
                label={'State'}
                error={formState.errors.state?.message}
                {...register('state')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                className={classes.input}
                placeholder={'Your zip code'}
                label={'Zip code'}
                error={formState.errors.zipcode?.message}
                {...register('zipcode')}
              />
            </Grid.Col>
          </Grid>
        </form>
      </Stack>
    </div>
  );
};
