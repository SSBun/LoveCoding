# Prompt 工程

Prompt 工程是与大语言模型（LLM）高效沟通的艺术，通过设计、优化提示词来获得更好的结果。

## 基础 Prompt 结构

### 角色设定

```
你是一位资深的 Python 开发者，拥有 10 年以上的开发经验。
请帮我审查以下代码并提出改进建议：
```

### 上下文提供

```
我正在开发一个电商网站，需要实现用户认证功能。
请帮我设计数据库结构：
```

### 任务明确

```
请用 Python 写一个函数，实现以下功能：
1. 接收一个数字列表
2. 返回列表中的最大值和最小值
```

### 输出格式指定

```
请以 JSON 格式返回结果，包含以下字段：
- name: 用户名
- email: 邮箱
- role: 角色（admin/user/guest）
```

## 高级技巧

### few-shot 学习

```
判断以下评论的情感（正面/负面）：

评论: "这个产品太棒了，完全超出预期！"
情感: 正面

评论: "质量很差，不推荐购买。"
情感: 负面

评论: "还行，中规中矩吧。"
情感:
```

### 思维链 (Chain of Thought)

```
问题：小明有 10 个苹果，给了小红 3 个，又买了 5 个，现在有多少苹果？

让我们一步步思考：
1. 小明最初有 10 个苹果
2. 给了小红 3 个，剩下 10 - 3 = 7 个
3. 又买了 5 个，现在有 7 + 5 = 12 个
答案是：12 个苹果
```

### 分隔符使用

```
请分析以下代码片段：

```
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```
```

## 常见模式

### 代码审查

```
请审查以下代码，指出潜在的问题和优化建议：

```python
def process_data(data):
    results = []
    for item in data:
        if item['status'] == 'active':
            results.append(item)
    return results
```
```

### 解释概念

```
用通俗易懂的语言解释什么是递归，并以 Python 代码为例说明。
```

### 教学辅导

```
我是一名初学者，想学习 React。请给我制定一个 4 周的学习计划，每周包含：
- 学习目标
- 推荐资源
- 练习项目
```

### 创意生成

```
生成 5 个移动应用的创意，要求：
1. 针对大学生群体
2. 解决学习相关的问题
3. 包含核心功能描述
```

## 注意事项

1. **具体明确** - 越具体的指令往往得到越准确的结果
2. **迭代优化** - 根据输出不断调整 prompt
3. **提供例子** - few-shot 能显著提高效果
4. **角色扮演** - 适当设定角色可以提升专业性
5. **格式要求** - 明确输出格式可以减少后续处理工作

## 更多资源

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Claude Prompt Engineering](https://docs.anthropic.com/en/docs/prompt-engineering)
