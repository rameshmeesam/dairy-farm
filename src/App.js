import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CowDetailView from './components/CowDetailView';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100vh' }} >
        <CowDetailView />        
        </Typography>
        
      </Container>
    </React.Fragment>
    
    </div>
  );
}

export default App;
