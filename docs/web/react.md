# React

React 是 Facebook 开发的用于构建用户界面的 JavaScript 库，采用组件化和虚拟 DOM 的设计。

## 函数组件

```tsx
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Hooks

### useState

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
```

### useEffect

```tsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{data}</div>;
}
```

### useContext

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

## 组件通信

### Props 传递

```tsx
// 父组件
function Parent() {
  return <Child message="Hello" />;
}

// 子组件
function Child(props: { message: string }) {
  return <p>{props.message}</p>;
}
```

### 状态提升

```tsx
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Child1 count={count} />
      <Child2 onIncrement={() => setCount(c => c + 1)} />
    </>
  );
}
```

## 路由

```tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 更多资源

- [React 官方文档](https://react.dev/)
- [React 中文网](https://zh-hans.react.dev/)
