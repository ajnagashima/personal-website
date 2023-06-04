import { Box, Container } from '@mui/material';

export default function HomePage() {
  return (
    <Container color='paper'>
      <Box sx={{ typography: 'h1', color: 'text.primary' }}>hello</Box>
      <Box sx={{ typography: 'h3', color: 'text.secondary' }}>
        You look good today
      </Box>
    </Container>
  );
}
