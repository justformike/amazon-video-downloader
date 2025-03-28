import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText('亚马逊视频下载器')).toBeInTheDocument();
  });
}); 