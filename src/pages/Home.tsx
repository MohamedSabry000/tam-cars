import { Box } from '@mui/material';
import Banner from '../components/Banner';
import Recommended from '../components/Recommended';
import Statistics from '../components/Statistics';

function Home() {
  return (
    <Box>
      <Statistics />
      <Banner />
      <Recommended />
    </Box>
  )
}

export default Home