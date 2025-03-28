const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  async getVideos() {
    const response = await fetch(`${API_URL}/api/videos`);
    return response.json();
  },

  async parseVideo(url: string) {
    const response = await fetch(`${API_URL}/api/videos/parse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    return response.json();
  },
}; 