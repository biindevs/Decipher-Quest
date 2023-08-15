import reactLogo from './assets/react.svg'
import { Container, Typography, Link, Box, List, ListItem, Button, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('xs')); // 'xs' breakpoint typically covers devices with screens less than 600px wide

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Typography variant="h5" gutterBottom>
        Decryption Challenge
      </Typography>
      <Typography paragraph>
        If you have successfully accessed this page, it indicates that you have completed the initial phase of decrypting the message.
      </Typography>
      <Typography paragraph>
        In the event that you encounter the following hyperlinks, diligently search for any fragments of hints contained within them, and assemble them to construct a meaningful word or phrase.
      </Typography>
      <Typography paragraph>
        Hint: Each individual letter, numbers, or symbol could potentially serve as a clue for decrypting the message.
      </Typography>
      <Typography paragraph>
        Make sure to put space between 3rd and 4th link; 4th and 5th link. Ceasar Cipher wants you to decrypt the code. Bear in mind that all the necessary clues can be found within this page.
      </Typography>

      <Box marginY={3}>
      <List>
  {[
    "https://sym.ph/iamacronym",
    "https://sym.ph/stationname",
    "https://sym.ph/firsttwoletter",
    "https://sym.ph/nameoftheinterviewee",
    "https://sym.ph/iamwhatyoucanseeinfirstglance",
    "https://sym.ph/iamnotwordnorletter"
  ].map((link, index) => {
    const [base, endpoint] = link.split('.ph/');

    return (
      <ListItem key={index} style={{ marginBottom: index === 2 || index === 3 ? "20px" : "10px", wordBreak: 'break-word' }}>
        <Paper elevation={3} style={{ padding: '10px', width: '100%', backgroundColor: '#f7f7f7' }}>
          <Typography variant="body1" gutterBottom>
            Hint {index + 1}:
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isMobile ? (
              <>
                {base}.ph/ <br />
                <span style={{ color: '#FF0000' }}>{endpoint}</span>
              </>
            ) : (
              <>
                {base}.ph/ <span style={{ color: '#FF0000' }}>{endpoint}</span>
              </>
            )}
          </Button>
        </Paper>
      </ListItem>
    );
  })}
</List>
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open('https://github.com', '_blank');
            }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
      <Typography variant="body2" align="center" style={{ marginTop: '20px', color: '#888' }}>
        <Link href="https://web.facebook.com/bernardjay.sanson.1" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>
          FOLLOW ME
        </Link> ON FB, P.S FRESHIES LANG DAPAT.
      </Typography>


    </Container>
  );
}

export default App
