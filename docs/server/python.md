# Python

Python 是一种简洁优雅的编程语言，广泛用于 Web 开发、数据科学、AI 等领域。

## 基础语法

```python
# 变量
name = "LoveCoding"
age = 25
is_active = True

# 列表
numbers = [1, 2, 3, 4, 5]

# 字典
user = {
    "name": "Alice",
    "age": 25
}
```

## 函数

```python
def greet(name: str) -> str:
    """问候函数"""
    return f"Hello, {name}!"

# 默认参数
def power(base, exponent=2):
    return base ** exponent

# 可变参数
def sum_all(*args):
    return sum(args)
```

## 类

```python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    
    def introduce(self) -> str:
        return f"I'm {self.name}, {self.age} years old."

# 继承
class Student(Person):
    def __init__(self, name: str, age: int, grade: str):
        super().__init__(name, age)
        self.grade = grade
```

## 装饰器

```python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
```

## 异步编程

```python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return {"data": "result"}

async def main():
    task = asyncio.create_task(fetch_data())
    result = await task
    print(result)

asyncio.run(main())
```

## 常用库

### Flask Web 框架

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify([
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"}
    ])

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    return jsonify(data), 201

if __name__ == '__main__':
    app.run(debug=True)
```

### FastAPI

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    age: int

@app.get("/users/{user_id}")
def read_user(user_id: int):
    return {"user_id": user_id, "name": "Alice"}

@app.post("/users/")
def create_user(user: User):
    return user
```

## 虚拟环境

```bash
# 创建虚拟环境
python -m venv venv

# 激活
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate      # Windows

# 安装依赖
pip install flask fastapi
```

## 更多资源

- [Python 官方文档](https://docs.python.org/3/)
- [Flask 文档](https://flask.palletsprojects.com/)
- [FastAPI 文档](https://fastapi.tiangolo.com/)
