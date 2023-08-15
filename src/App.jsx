import { useState, useEffect } from 'react';
import { Container, Typography, Link, Box, List, ListItem, Button, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import './App.css';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const challengeWord = 'Challenge';
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(5);


  useEffect(() => {

    if (countdown === 0) {
      setLoading(false);
      return;
    }


    const timer = setInterval(() => {
      setCountdown(prevCount => prevCount - 1);
    }, 1000);


    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    if (!loading) {
      const typingInterval = setInterval(() => {
        setTypedText(challengeWord.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (challengeWord.length + 1));
      }, 300);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [currentIndex, loading]);

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      {loading ? (
        <div className="loading-screen">
          <Typography variant="h1">{countdown}</Typography>
        </div>
      ) : (
        <div className='fade-in'>
          <Typography variant="h2" align="center" gutterBottom className="typing-title">
            Decryption <span className="typing-text text-center">{typedText}</span>
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
          <Box marginY={3} style={{ backgroundColor: '#000', borderRadius: '10px', padding: '20px' }}>
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
                    <Paper elevation={3} style={{ padding: '10px', width: '100%', backgroundColor: '#222', color: '#00FF00', fontFamily: "'Roboto', sans-serif", border: '1px solid #00FF00' }}>
                      <Typography variant="body1" gutterBottom style={{ color: '#00FF00', textShadow: '0 0 5px #00FF00' }}>
                        Hint {index + 1}:
                      </Typography>
                      <Button
                        variant="outlined"
                        style={{ borderColor: '#00FF00', color: '#00FF00', fontFamily: "'Roboto', sans-serif", transition: 'all 0.3s', '&:hover': { backgroundColor: '#00FF00', color: '#222' } }}
                        fullWidth
                        component="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {isMobile ? (
                          <>
                            {base}.ph/ <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{endpoint}</span>
                          </>
                        ) : (
                          <>
                            {base}.ph/ <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{endpoint}</span>
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
                variant="outlined"
                style={{
                  borderColor: '#00FF00',
                  color: '#00FF00',
                  fontFamily: "'Roboto', sans-serif",
                  transition: 'all 0.3s',
                  backgroundColor: '#222',
                  padding: '10px 20px',
                  '&:hover': {
                    backgroundColor: '#00FF00',
                    color: '#222',
                    boxShadow: '0 0 10px #00FF00, 0 0 5px #00FF00'
                  },
                  '&:active': {
                    backgroundColor: '#00AA00',
                  }
                }}
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
              ADD ME
            </Link> IF STUCK KANA.
          </Typography>
        </div>
      )}
    </Container>
  );
}

export default App;
