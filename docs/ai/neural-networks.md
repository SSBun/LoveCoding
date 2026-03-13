# 神经网络

神经网络是受人脑启发的计算模型，是深度学习的基础。

## 基础结构

```
输入层 -> 隐藏层 -> 输出层
```

### 前向传播

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def forward(X, weights):
    hidden = sigmoid(np.dot(X, weights['W1']) + weights['b1'])
    output = sigmoid(np.dot(hidden, weights['W2']) + weights['b2'])
    return output
```

## 反向传播

```python
def backward(X, y, output, weights, learning_rate):
    # 计算梯度
    output_error = y - output
    output_delta = output_error * sigmoid_derivative(output)
    
    hidden_error = np.dot(output_delta, weights['W2'].T)
    hidden_delta = hidden_error * sigmoid_derivative(hidden)
    
    # 更新权重
    weights['W2'] += learning_rate * np.dot(hidden.T, output_delta)
    weights['b2'] += learning_rate * np.sum(output_delta, axis=0)
    weights['W1'] += learning_rate * np.dot(X.T, hidden_delta)
    weights['b1'] += learning_rate * np.sum(hidden_delta, axis=0)
    
    return weights
```

## 激活函数

| 函数 | 公式 | 特点 |
|------|------|------|
| Sigmoid | 1/(1+e^-x) | 输出 0-1 |
| ReLU | max(0, x) | 解决梯度消失 |
| Tanh | (e^x - e^-x)/(e^x + e^-x) | 输出 -1 到 1 |
| Softmax | e^xi / sum(e^xj) | 多分类输出 |

## 过拟合处理

### Dropout

```python
class Dropout:
    def __init__(self, rate):
        self.rate = rate
    
    def forward(self, x):
        self.mask = np.random.binomial(1, 1-self.rate, x.shape) / (1-self.rate)
        return x * self.mask
```

### L2 正则化

```python
def l2_regularization(loss, weights, lambda_):
    penalty = lambda_ * np.sum(weights ** 2)
    return loss + penalty
```

## 更多资源

- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
- [CS231n Stanford](http://cs231n.stanford.edu/)
