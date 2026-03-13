# Foundation

Foundation 框架是 iOS 和 macOS 开发的基础框架，提供了许多核心功能类和数据类型。

## 核心类

### NSObject

所有 Objective-C 类的基类，也是 Swift 类的根。

### NSString / String

```swift
let str = "Hello, Foundation"
let uppercase = str.uppercased()
let hasPrefix = str.hasPrefix("Hello")
```

### NSArray / Array

```swift
let array = [1, 2, 3, 4, 5]
let first = array.first
let last = array.last
let sorted = array.sorted()
```

### NSDictionary / Dictionary

```swift
let dict = ["name": "LoveCoding", "version": "1.0"]
let name = dict["name"]
```

## 常用工具

### Date - 日期处理

```swift
let now = Date()
let formatter = DateFormatter()
formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
let formatted = formatter.string(from: now)
```

### FileManager - 文件操作

```swift
import Foundation

let fileManager = FileManager.default
let documentsPath = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first!
```

### UserDefaults - 用户偏好设置

```swift
// 存储
UserDefaults.standard.set("value", forKey: "key")

// 读取
let value = UserDefaults.standard.string(forKey: "key")
```

### JSONEncoder / JSONDecoder - JSON 序列化

```swift
struct Person: Codable {
    let name: String
    let age: Int
}

let person = Person(name: "Tom", age: 25)
let encoder = JSONEncoder()
let data = try encoder.encode(person)
let jsonString = String(data: data, encoding: .utf8)
```

## 错误处理

```swift
enum MyError: Error {
    case invalidInput
    case networkError
    case notFound
}

func doSomething() throws {
    throw MyError.invalidInput
}

do {
    try doSomething()
} catch {
    print("Error: \(error)")
}
```
