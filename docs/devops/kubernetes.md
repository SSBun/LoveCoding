# Kubernetes

Kubernetes（K8s）是一个开源的容器编排平台，用于自动化容器化应用的部署、扩展和管理。

## 基础概念

### Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.21
    ports:
    - containerPort: 80
```

### Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:1.0
        ports:
        - containerPort: 8080
```

### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer
```

## 常用命令

```bash
# 创建资源
kubectl apply -f deployment.yaml

# 查看 Pods
kubectl get pods

# 查看详情
kubectl describe pod my-pod

# 查看日志
kubectl logs my-pod

# 进入容器
kubectl exec -it my-pod -- /bin/bash

# 删除资源
kubectl delete -f deployment.yaml

# 扩缩容
kubectl scale deployment my-app --replicas=5
```

## ConfigMap 和 Secret

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-config
data:
  DATABASE_URL: "postgres://db:5432/app"
  LOG_LEVEL: "info"
```

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
stringData:
  username: admin
  password: secret
```

## Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              number: 80
```

## 更多资源

- [Kubernetes 官方文档](https://kubernetes.io/docs/)
- [kubectl 备忘单](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
