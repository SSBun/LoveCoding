# Kotlin

Kotlin 是一种现代的、简洁的编程语言，与 Java 完全互操作，是 Android 开发的首选语言。

## 变量

```kotlin
// 可变变量
var name = "LoveCoding"

// 不可变变量
val age = 25
```

## 数据类型

| 类型 | 描述 |
|------|------|
| String | 字符串 |
| Int | 整数 |
| Double | 浮点数 |
| Boolean | 布尔值 |
| List | 列表 |
| Map | 字典 |

## 函数

```kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}

// 单表达式函数
fun double(x: Int) = x * 2
```

## 类

```kotlin
class Person(val name: String, var age: Int) {
    
    fun introduce(): String {
        return "I'm $name, $age years old."
    }
}

// 创建实例
val person = Person("Tom", 25)
```

## 空安全

```kotlin
// 可空类型
var nullable: String? = null

// 安全调用
val length = nullable?.length

// Elvis 操作符
val len = nullable?.length ?: 0

// 非空断言
val len2 = nullable!!.length
```

## 协程

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello")
}
```

## 数据类

```kotlin
data class User(val name: String, val email: String)

// 自动生成 equals(), hashCode(), toString(), copy()
```
