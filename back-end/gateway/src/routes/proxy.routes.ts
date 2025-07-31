
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import httpProxy from 'http-proxy-middleware';
const { createProxyMiddleware } = httpProxy;

import { Services } from '../config/services.js';

const router = express.Router();

router.use(morgan('dev'));
router.use(cors());

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