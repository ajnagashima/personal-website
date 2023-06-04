import { Box, Container, Typography } from '@mui/material';

export default function AccountPage() {
  return (
    <Container>
      <Typography variant='h3'>Account Details</Typography>
      <Box sx={{ typography: 'h1', color: 'text.primary' }}>hello</Box>
      <Box sx={{ typography: 'h3', color: 'text.secondary' }}>
        You look good today
      </Box>
    </Container>
  );
}
