import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const VideoForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL as string;
      const response = await fetch(`${apiUrl}/api/videos/parse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log('Response:', data);
      setUrl('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="视频 URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        解析视频
      </Button>
    </Box>
  );
};

export default VideoForm;
