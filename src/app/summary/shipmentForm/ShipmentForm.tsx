import { Grid } from '@mantine/core';

export const ShipmentForm = () => {
  return (
    <form>
      <Grid columns={12} gutter={'xl'}>
        <Grid.Col span={6}>Name</Grid.Col>
        <Grid.Col span={6}>Surname</Grid.Col>
        <Grid.Col span={12}>Phone number</Grid.Col>
        <Grid.Col span={12}>Email</Grid.Col>
        <Grid.Col span={12}>Date of birth</Grid.Col>
        <Grid.Col span={12}>Address</Grid.Col>
        <Grid.Col span={12}>City</Grid.Col>
        <Grid.Col span={6}>State</Grid.Col>
        <Grid.Col span={6}>Zip code</Grid.Col>
      </Grid>
    </form>
  );
};
