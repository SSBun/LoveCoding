# 数据库

数据库是用于存储和管理数据的系统，是现代应用的核心组成部分。

## 关系型数据库

### MySQL

```sql
-- 创建表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入数据
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

-- 查询
SELECT * FROM users WHERE age > 18;

-- 更新
UPDATE users SET name = 'Bob' WHERE id = 1;

-- 删除
DELETE FROM users WHERE id = 1;
```

### PostgreSQL

```sql
-- 创建表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 高级查询
SELECT 
    u.name,
    COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;
```

## NoSQL 数据库

### MongoDB

```javascript
// 插入文档
db.users.insertOne({
    name: "Alice",
    email: "alice@example.com",
    age: 25,
    tags: ["developer", "python"]
})

// 查询
db.users.find({ age: { $gt: 18 } })

// 更新
db.users.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } }
)

// 聚合
db.orders.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$user_id", total: { $sum: "$amount" } } }
])
```

### Redis

```javascript
// 字符串
SET user:1:name "Alice"
GET user:1:name

// 哈希
HSET user:1 name "Alice" email "alice@example.com"
HGETALL user:1

// 列表
LPUSH tasks "task1"
LPOP tasks

// 集合
SADD tags "python" "javascript"
SMEMBERS tags

// 有序集合
ZADD leaderboard 100 "Alice"
ZREVRANGE leaderboard 0 9 WITHSCORES
```

## 索引

```sql
-- 单列索引
CREATE INDEX idx_email ON users(email);

-- 复合索引
CREATE INDEX idx_name_age ON users(name, age);

-- 全文索引 (MySQL)
ALTER TABLE articles ADD FULLTEXT(title, content);

-- 唯一索引
CREATE UNIQUE INDEX idx_username ON users(username);
```

## 事务

```sql
-- MySQL
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;  -- 或 ROLLBACK;
```

## ORM 示例

### Prisma (Node.js)

```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// 查询
const users = await prisma.user.findMany()

// 创建
const user = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@example.com'
  }
})

// 更新
await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Bob' }
})

// 删除
await prisma.user.delete({
  where: { id: 1 }
})
```

## 更多资源

- [MySQL 官方文档](https://dev.mysql.com/doc/)
- [PostgreSQL 官方文档](https://www.postgresql.org/docs/)
- [MongoDB 官方文档](https://docs.mongodb.com/)
- [Redis 官方文档](https://redis.io/documentation)
