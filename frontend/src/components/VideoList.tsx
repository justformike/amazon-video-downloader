import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL as string;
        const response = await fetch(`${apiUrl}/api/videos`);
        const data = await response.json();
        setVideos(data.data.videos);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <List>
        {videos.map((video: any) => (
          <ListItem key={video.id}>
            <ListItemText 
              primary={video.title}
              secondary={`状态: ${video.status}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default VideoList;
