import { Grid, Stack } from '@mui/material';

export function FormRow(props: any) {
  return (
    <Grid item sm={12}>
      <Stack direction="row">{props.children}</Stack>
    </Grid>
  );
}
