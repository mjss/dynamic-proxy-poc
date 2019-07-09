const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()

const customRouter = function(req) {
  return req.query.proxy;
};

app.use(
  '/api',
  proxy({
    router: customRouter,
    target: 'http://www.example.org',
    changeOrigin: true
  })
)
app.listen(3000)