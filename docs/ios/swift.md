# Swift 基础

Swift 是苹果公司开发的现代编程语言，用于 iOS、macOS、watchOS 和 tvOS 开发。

## 变量与常量

```swift
// 常量（不可修改）
let name = "LoveCoding"

// 变量（可以修改）
var count = 0
count = 1
```

## 数据类型

| 类型 | 描述 | 示例 |
|------|------|------|
| String | 字符串 | `"Hello"` |
| Int | 整数 | `42` |
| Double | 浮点数 | `3.14` |
| Bool | 布尔值 | `true/false` |
| Array | 数组 | `[1, 2, 3]` |
| Dictionary | 字典 | `["key": "value"]` |

## 函数

```swift
func greet(name: String) -> String {
    return "Hello, \(name)!"
}

// 调用
let message = greet(name: "World")
```

## 类与结构体

```swift
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func introduce() -> String {
        return "I'm \(name), \(age) years old."
    }
}
```

## 协议

```swift
protocol Drawable {
    func draw()
}

struct Circle: Drawable {
    func draw() {
        print("Drawing a circle")
    }
}
```
