import { Router } from 'itty-router';

// 创建路由器
const router = Router();

// 定义路由
router.get('/api/videos', async (request) => {
  return new Response(JSON.stringify({
    videos: []
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
});

router.post('/api/videos/parse', async (request) => {
  try {
    const body = await request.json();
    const { url } = body;

    // 这里添加视频解析逻辑
    return new Response(JSON.stringify({
      success: true,
      data: { url }
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
});

// 处理 CORS 预检请求
router.options('*', () => new Response(null, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
}));

// 添加日志
async function logRequest(request: Request) {
  console.log(`${request.method} ${request.url}`);
}

// 在路由处理前添加日志
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('Hello World!', {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
}; 