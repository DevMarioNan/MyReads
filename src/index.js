import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route exact path="/search" element={<SearchPage />}/>
      <Route path="*" element={
        <>
          <Box sx={{height:'100vh',width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Typography variant='h1'>404 - PAGE NOT FOUND</Typography>
          </Box>
        </>
      } />
    </Routes>
  </BrowserRouter>
);

