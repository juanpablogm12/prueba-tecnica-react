import { Avatar, Box, Typography } from '@mui/material';

export function MessageLeft({ sender, message }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Avatar sx={{ background: '#EEEEEE' }}>CT</Avatar>
        <Typography
          className='message--left--text'
          variant='body1'
          component={'span'}
        >
          {message}
        </Typography>
      </Box>
    </>
  );
}
