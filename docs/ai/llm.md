# 大语言模型

大语言模型（Large Language Model，LLM）是基于深度学习技术训练的语言模型，能够理解和生成人类语言。

## LLM 基础

### 什么是 LLM

大语言模型是使用大规模文本数据训练深度神经网络，主要用于：

- 文本生成
- 问答系统
- 代码生成
- 翻译
- 总结
- 对话

### 主流模型

| 模型 | 开发者 | 特点 |
|------|--------|------|
| GPT-4 | OpenAI | 多模态，最强综合能力 |
| Claude 3 | Anthropic | 安全可控，长文本处理 |
| Gemini | Google | 多模态，Google 生态 |
| LLaMA | Meta | 开源，可本地部署 |
| 通义千问 | 阿里 | 中文优化 |

## API 调用

### OpenAI API

```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "你是一个有帮助的助手"},
        {"role": "user", "content": "用 Python 写一个快速排序"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)
```

### Anthropic Claude API

```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    messages=[
        {"role": "user", "content": "解释一下什么是 Transformer 架构"}
    ]
)

print(message.content[0].text)
```

### 流式输出

```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "写一个故事"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

## 提示词模式

### RAG (检索增强生成)

```python
# 1. 文档向量化
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

texts = ["文档内容..."]
splitter = CharacterTextSplitter()
docs = splitter.create_documents(texts)

embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(docs, embeddings)

# 2. 检索相关文档
query = "用户问题"
docs = vectorstore.similarity_search(query)

# 3. 构建 Prompt
context = "\n".join([d.page_content for d in docs])
prompt = f"基于以下上下文回答问题：\n\n{context}\n\n问题：{query}"

# 4. 调用 LLM
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}]
)
```

### Agent 模式

```python
from langchain.agents import AgentType, initialize_agent
from langchain.tools import Tool

def calculator(expression: str) -> str:
    return str(eval(expression))

tools = [
    Tool(
        name="Calculator",
        func=calculator,
        description="用于数学计算"
    )
]

agent = initialize_agent(
    tools,
    llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION
)

result = agent.run("计算 123 * 456 的结果")
```

## 本地部署

### Ollama

```bash
# 安装
brew install ollama

# 运行模型
ollama run llama2

# API 调用
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Hello",
  "stream": false
}'
```

### LM Studio

- 图形界面工具
- 支持多种开源模型
- 本地 API 服务

## 模型微调

### LoRA 微调

```python
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained("base-model")

lora_config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
```

## 成本优化

1. **选择合适的模型** - 简单任务用小模型
2. **缓存** - 相同问题复用结果
3. **批量处理** - 一次处理多条
4. **流式输出** - 减少等待时间
5. **参数调优** - 调整 temperature、max_tokens

## 更多资源

- [OpenAI Platform](https://platform.openai.com/)
- [Anthropic Docs](https://docs.anthropic.com/)
- [LangChain](https://python.langchain.com/)
- [Hugging Face](https://huggingface.co/)
