# 自然语言处理

自然语言处理（NLP）是让计算机理解、解释和生成人类语言的领域。

## 文本预处理

```python
import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# 清洗文本
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    return text

# 分词
tokens = word_tokenize("Hello, world!")

# 去除停用词
stop_words = set(stopwords.words('english'))
filtered = [w for w in tokens if w not in stop_words]
```

## 词嵌入

### Word2Vec

```python
from gensim.models import Word2Vec

sentences = [
    ['i', 'love', 'machine', 'learning'],
    ['deep', 'learning', 'is', 'awesome']
]

model = Word2Vec(sentences, vector_size=100, window=5, min_count=1)

# 获取词向量
vector = model.wv['learning']
similar = model.wv.most_similar('learning')
```

### BERT

```python
from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello world", return_tensors="pt")
outputs = model(**inputs)
embeddings = outputs.last_hidden_state
```

## 文本分类

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# TF-IDF 向量化
vectorizer = TfidfVectorizer()
X_train_tfidf = vectorizer.fit_transform(train_texts)

# 训练分类器
clf = MultinomialNB()
clf.fit(X_train_tfidf, train_labels)

# 预测
prediction = clf.predict(vectorizer.transform(["new text"]))
```

## 序列到序列

### Transformer 架构

```python
import torch
import torch.nn as nn

class Transformer(nn.Module):
    def __init__(self, d_model, nhead, num_layers):
        super().__init__()
        self.encoder_layer = nn.TransformerEncoderLayer(d_model, nhead)
        self.transformer_encoder = nn.TransformerEncoder(self.encoder_layer, num_layers)
        self.decoder = nn.Linear(d_model, vocab_size)
    
    def forward(self, src):
        encoded = self.transformer_encoder(src)
        output = self.decoder(encoded)
        return output
```

## 命名实体识别

```python
import spacy

nlp = spacy.load('en_core_web_sm')
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

for ent in doc.ents:
    print(ent.text, ent.label_)
```

## 更多资源

- [Hugging Face](https://huggingface.co/)
- [spaCy 文档](https://spacy.io/)
- [NLTK 文档](https://www.nltk.org/)
