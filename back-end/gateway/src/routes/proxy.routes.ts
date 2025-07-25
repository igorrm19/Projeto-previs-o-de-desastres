
import express from 'express';
import { Services } from '../config/services.js';
import httpProxy from 'http-proxy-middleware';
const { createProxyMiddleware } = httpProxy;


const router = express.Router();

router.use('/auth', createProxyMiddleware({
  target: Services.auth,
  changeOrigin: true,
  pathRewrite: { '^/auth': '' }
}));

router.use('/user', createProxyMiddleware({
  target: Services.user,
  changeOrigin: true,
  pathRewrite: { '^/user': '' }
}));

export default router;