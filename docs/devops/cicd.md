# CI/CD

持续集成（CI）和持续部署（CD）是现代软件开发的最佳实践。

## CI/CD 流程

```
代码提交 -> 构建 -> 测试 -> 部署 -> 监控
```

## GitHub Actions

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install Dependencies
      run: npm ci
    
    - name: Run Tests
      run: npm test
    
    - name: Build
      run: npm run build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy
      run: |
        echo "Deploying to production..."
```

## GitLab CI

```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - npm ci
    - npm run build

test:
  stage: test
  script:
    - npm test
  coverage: /Coverage: \d+\.\d+%/

deploy:
  stage: deploy
  script:
    - echo "Deploying..."
  only:
    - main
```

## Jenkins Pipeline

```groovy
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run deploy'
            }
        }
    }
    
    post {
        always {
            junit '**/test-results/*.xml'
        }
    }
}
```

## 最佳实践

1. **保持构建快速** - 快速反馈循环
2. **自动化一切** - 减少手动操作
3. **使用环境变量** - 敏感信息不硬编码
4. **测试覆盖率** - 确保代码质量
5. **回滚策略** - 快速恢复能力

## 更多资源

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [GitLab CI 文档](https://docs.gitlab.com/ee/ci/)
- [Jenkins 文档](https://www.jenkins.io/doc/)
