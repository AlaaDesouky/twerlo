import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactNode } from 'react';

type WrapperContainerProps = {
  children: ReactNode
}

export function WrapperContainer({ children }: WrapperContainerProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Box sx={{ bgcolor: '#fff', height: '100vh', padding: '2rem' }}>
          {children}
        </Box>
      </Container>
    </>
  );
}
