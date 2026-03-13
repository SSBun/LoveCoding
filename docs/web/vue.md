# Vue

Vue 是尤雨溪创建的渐进式 JavaScript 框架，用于构建用户界面，易于上手且功能强大。

## 模板语法

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">反转</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')

function reverseMessage() {
  message.value = message.value.split('').reverse().join('')
}
</script>
```

## 响应式

### ref vs reactive

```vue
<script setup>
import { ref, reactive } from 'vue'

// ref - 原始类型
const count = ref(0)

// reactive - 对象
const state = reactive({
  name: 'Vue',
  version: 3
})
</script>
```

## 组件

### 定义组件

```vue
<!-- Child.vue -->
<template>
  <button @click="$emit('update', value)">
    Click
  </button>
</template>

<script setup>
defineProps({
  value: String
})

defineEmits(['update'])
</script>
```

### 使用组件

```vue
<template>
  <Child 
    :value="msg" 
    @update="handleUpdate" 
  />
</template>
```

## 生命周期

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件挂载')
})

onUnmounted(() => {
  console.log('组件卸载')
})
</script>
```

## 路由

```typescript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

## Pinia 状态管理

```typescript
// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 更多资源

- [Vue 官方文档](https://vuejs.org/)
- [Vue 中文文档](https://cn.vuejs.org/)
