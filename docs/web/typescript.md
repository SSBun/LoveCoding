# TypeScript

TypeScript 是 JavaScript 的超集，添加了类型系统和其他高级特性，帮助开发者构建更可靠的应用程序。

## 基础类型

```typescript
// 原始类型
let name: string = 'LoveCoding'
let age: number = 25
let isActive: boolean = true

// 数组
let numbers: number[] = [1, 2, 3]
let strings: Array<string> = ['a', 'b', 'c']

// 元组
let pair: [string, number] = ['key', 1]

// 枚举
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
```

## 接口

```typescript
interface User {
  name: string
  age: number
  email?: string  // 可选属性
  readonly id: number  // 只读属性
}

const user: User = {
  name: 'Tom',
  age: 25,
  id: 1
}
```

## 类型别名

```typescript
type ID = string | number
type Callback = (result: string) => void

type UserStatus = 'active' | 'inactive' | 'pending'
```

## 函数

```typescript
// 函数类型
function add(a: number, b: number): number {
  return a + b
}

// 可选参数
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`
}

// 箭头函数类型
const multiply = (a: number, b: number): number => a * b
```

## 泛型

```typescript
function identity<T>(arg: T): T {
  return arg
}

interface Container<T> {
  value: T
  get(): T
}

class Box<T> {
  constructor(public content: T) {}
}
```

## 装饰器

```typescript
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with:`, args)
    return original.apply(this, args)
  }
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b
  }
}
```

## 模块

```typescript
// utils.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString()
}

export default class Utils { }

// main.ts
import { formatDate } from './utils'
import Utils from './utils'
```

## 进阶类型

### 联合类型

```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + value
  }
  return padding + value
}
```

### 交叉类型

```typescript
interface A {
  a: string
}

interface B {
  b: number
}

type C = A & B  // { a: string; b: number }
```

### 映射类型

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

## 更多资源

- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [TypeScript 中文文档](https://www.tslang.cn/)
