# Node.js

Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时，用于构建快速、可扩展的网络应用。

## 模块系统

```javascript
// CommonJS
const fs = require('fs')
const { join } = require('path')

// ES Modules
import fs from 'fs'
import { join } from 'path'
```

## HTTP 服务

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, Node.js!')
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
```

## Express 框架

```javascript
const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ])
})

app.post('/api/users', express.json(), (req, res) => {
  const newUser = req.body
  // 保存用户...
  res.status(201).json(newUser)
})

app.listen(3000)
```

## 异步编程

### Promise

```javascript
function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
}
```

### async/await

```javascript
async function main() {
  try {
    const data = await fetchData('https://api.example.com/data')
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
```

## 文件操作

```javascript
const fs = require('fs').promises

// 读取文件
const content = await fs.readFile('file.txt', 'utf-8')

// 写入文件
await fs.writeFile('output.txt', 'Hello!')

// 创建目录
await fs.mkdir('new-dir', { recursive: true })
```

## 中间件

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
```

## 数据库集成

```javascript
const mysql = require('mysql2/promise')

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  })
  
  const [rows] = await connection.execute(sql, params)
  await connection.end()
  return rows
}
```

## 更多资源

- [Node.js 官方文档](https://nodejs.org/)
- [Express 中文网](https://www.expressjs.com.cn/)
