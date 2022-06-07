import { Grid, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Home = () => {

    return (
        <Grid container>
            <Grid item xs={12}>
            <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
            </Grid>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={2}>

            </Grid>
        </Grid>
    );
};

export default Home;