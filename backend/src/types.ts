export interface Video {
  id: string;
  url: string;
  title: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: number;
}

export interface ParseVideoRequest {
  url: string;
}

export interface ParseVideoResponse {
  success: boolean;
  data?: {
    url: string;
    title?: string;
  };
  error?: string;
} 