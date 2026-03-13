# SwiftUI

SwiftUI 是苹果推出的现代化声明式 UI 框架，用于构建 iOS、macOS、watchOS 和 tvOS 的用户界面。

## 基础视图

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, SwiftUI!")
            .font(.largeTitle)
            .foregroundColor(.blue)
            .padding()
    }
}
```

## 容器视图

### VStack - 垂直排列

```swift
VStack(spacing: 20) {
    Text("第一行")
    Text("第二行")
    Text("第三行")
}
```

### HStack - 水平排列

```swift
HStack {
    Image(systemName: "star.fill")
    Text("收藏")
}
```

### ZStack - 叠加排列

```swift
ZStack {
    Color.blue
    Text("上层内容")
}
```

## 状态管理

```swift
struct CounterView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("\(count)")
                .font(.largeTitle)
            
            Button("增加") {
                count += 1
            }
        }
    }
}
```

## 列表

```swift
struct ListView: View {
    let items = ["Apple", "Banana", "Orange"]
    
    var body: some View {
        List(items, id: \.self) { item in
            Text(item)
        }
    }
}
```

## 导航

```swift
struct NavigationViewExample: View {
    var body: some View {
        NavigationView {
            NavigationLink("详情页") {
                DetailView()
            }
            .navigationTitle("首页")
        }
    }
}
```

## 更多信息

- [Apple SwiftUI 官方文档](https://developer.apple.com/documentation/swiftui/)
