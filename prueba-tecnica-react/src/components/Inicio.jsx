import {
  Grid,
  Container,
  Paper,
  Typography,
  ImageListItem,
  ImageList,
} from '@mui/material';

export function Inicio() {
  return (
    <Container sx={{ marginTop: 3 }}>
      <Paper sx={{ padding: 3, background: '#EEEEEE' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              component='h1'
              variant='h3'
              fontSize={{ xs: 40, sm: 80 }}
            >
              Bienvenido a React User Chat
            </Typography>
            <Typography
              variant='h4'
              pt={3}
              paddingTop={3}
              fontSize={{ xs: 27, sm: 38 }}
            >
              Aquí podras visualizar el funcionamiento de un chat para tu
              aplicación.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src='chat2.jpg'
              style={{ width: '100%', height: 'auto', borderRadius: 7 }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}
        >
          <Grid item xs={12} sm={6}>
            <img
              src='desarrollo.jpg'
              style={{ width: '100%', height: 'auto', borderRadius: 7 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h3' paddingTop={{ xs: 2, sm: 8 }}>
              Este proyecto fue realizado con react
            </Typography>
            <Typography variant='h4' pt={3} fontSize={{ xs: 27, sm: 38 }}>
              se resalta la implementación de custom hooks para un código mas
              limplio y el local storage para manter la sesion iniciada.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
} 
