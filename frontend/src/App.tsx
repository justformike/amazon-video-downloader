import { Container, Typography } from '@mui/material';
import VideoList from './components/VideoList';
import VideoForm from './components/VideoForm';

function App() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        亚马逊视频下载器
      </Typography>
      <VideoForm />
      <VideoList />
    </Container>
  );
}

export default App;

