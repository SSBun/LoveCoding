# Docker

Docker 是一个开源的容器化平台，用于开发、部署和运行应用程序。

## 基础命令

```bash
# 拉取镜像
docker pull nginx:latest

# 运行容器
docker run -d -p 8080:80 nginx

# 列出运行中的容器
docker ps

# 列出所有容器
docker ps -a

# 停止容器
docker stop container_id

# 删除容器
docker rm container_id

# 查看镜像
docker images
```

## Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

## Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

## 网络

```bash
# 创建网络
docker network create my-network

# 连接容器到网络
docker network connect my-network container_name

# 查看网络
docker network ls
```

## 数据卷

```bash
# 创建数据卷
docker volume create my-volume

# 挂载数据卷
docker run -v my-volume:/app/data nginx
```

## 更多资源

- [Docker 官方文档](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
