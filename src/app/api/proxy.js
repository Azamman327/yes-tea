import httpProxy from 'http-proxy';

// 프록시 인스턴스 생성
const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  // 프록시 요청 전달
  proxy.web(req, res, { target: 'http://localhost:8080', changeOrigin: true });
}

// API 라우트에서 기본 설정 비활성화
export const config = {
  api: {
    bodyParser: false,
  },
};
