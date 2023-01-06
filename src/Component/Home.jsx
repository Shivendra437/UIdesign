import * as React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import './AdvantageStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Advantage() {

   const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Grid className='advantage-container' container my={8} justifyContent="center" alignItems="center">
        <Grid className='advantage-images' item md={6}>
          <Box bgcolor="primary-light">
            <h3>Images of Advantage</h3>
          </Box>
        </Grid>
        <Grid className='advantage-topic' item md={6} xs={6}>
          <Typography variant="h6" className="advantage-topic-sub-heading">Increase your productivity</Typography>
          <Typography variant="subtitle1">
            Paraphrase more text at once to finish writing faster.
          </Typography>
          <button onclick={notify}>Show</button>
          <ToastContainer
          position={"top-right"}
          />
          <Typography variant="h6" className="advantage-topic-sub-heading">Access all modes</Typography>
          <Typography variant="subtitle1">
            Get maximum control over how you paraphrase.
          </Typography>
          <Typography variant="h6" className="advantage-topic-sub-heading">Scan for plagiarism</Typography>
          <Typography variant="subtitle1">
            Unlock the Plagiarism Checker to guarantee all sources are cited and
            nothing is unintentionally plagiarized.
          </Typography>
          <Typography variant="h6" className="advantage-topic-sub-heading">Compare all mode outputs at once</Typography>
          <Typography variant="subtitle1">
            Paraphrase in and compare outputs from all seven modes.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
