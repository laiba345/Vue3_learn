# Vue3
![Vue3](./picture/Vue3.png)

## Vue3的设计目标
**更小、更快、更友好、优化方案**
**设计目标**
1. 复杂组件的代码变得越来越难维护
2. 缺少一种**比较干净的多个组件之间提取和复用逻辑的机制**

更小
1. Vue3移除了一些不常用的API
2. 引入tree-shaking, 将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了

更快
1. diff算法优化
2. 静态提升
3. 事件监听缓存
4. SSR优化

## Vue2和Vue3的区别
1. 生命周期不同
2. 多根节点
    - Vue2不支持
    - Vue3支持
3. Composition API
    - Vue2是选项式API
    - Vue3是组合式API; 可将同一逻辑的内容写到一起
4. 异步组件(Suspense)
    - 允许程序在等待异步组件加载完成前渲染兜底内容,如loading,使用户的体验更加平滑
5. Teleport
    - Vue3提供Teleport组件,可将部分DOM移动到Vue app之外的位置,**比如项目中常见的Dialog弹窗**
6. 响应式原理
    - Vue2; Object.defineProperty(直接在一个对象上定义新的属性或修改现有的属性,并返回对象)
    - Vue3; Proxy
        - Why?
        - 1、无法监听对象或数组新增、删除的元素

7. 虚拟DOM
    - Vue3的虚拟DOM上增加了patchFlag字段,
    ```
    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */)
    ```
    - 解读: 1代表节点为动态文本节点,那么在diff过程中,只需对比文本内容,无需关注class、style、等
    - **发现所有的静态节点HOISTED为-1时,都保存一个变量为静态提升**,可在渲染时直接引用,无需重新创建
8. 事件缓存
    - Vue3中的cacheHandler可在第一次渲染后缓存我们的事件
        - 观察以上渲染函数,你会发现click事件节点为静态节点(HOISTED为-1),即不需要每次重新渲染
    - 相比于Vue2无需每次渲染都传递一个新函数,增加一个click事件

### 选项式API和组合式API
1. 使用选项式API; 可以使用选项对象定义组件的逻辑,例如data、methods和mounted,由选项定义的属性在this内部函数中公开,指向组件实例
2. 使用组合式API; 我们使用导入的API函数定义组件的逻辑

## Vue3 (codeWhy)
### 指令
1. 指令
- v-once; 用于指定元素或者组件只渲染一次
- v-text; 用于更新元素的textContent
    ```
    <template>
        <span v-text="message"></span>
    </template>

    <script>
        import { ref } from 'vue';
        export default {
            name: "Test",
            setup() {
                let message = ref('kang')

                return {
                    message
                }
            }
        }
    </script>

    <style>
        span {
            color: yellowgreen;
        }
    </style>
    ```
- v-html; 如果我们展示的内容本身是html的,那么vue并不会对其进行特殊的解析
- v-pre; 用于跳过元素和它子元素的编译过程

### 绑定基本属性
2. 绑定基本属性
- v-bind; 用于绑定一个或多个属性值,或者向另一个组件传递props值
    - v-bind;还有一个语法糖; 简写形式;使用一个冒号:
- 绑定class介绍
    - 对象语法; 以动态的切换class
    - 数组语法
- 绑定style介绍
    - 使用v-bind:style来绑定一些CSS内联样式
        - 因为某些样式我们需要根据数据动态来决定
        - 比如某些文字的颜色、大小
    - CSS属性;可以使用驼峰式:fontSize;或者kebab-case式:background-color;
- 动态绑定属性
    - 某些情况下,属性名称不是固定的;使用 :[属性名] = “值”
- 绑定一个对象
    - 我们希望将一个对象的所有属性,绑定到元素上的所有属性
    - 我们可以直接使用v-bind绑定一个对象
    - <div v-bind="info">{{ message }}</div>

### 绑定事件
3. v-on绑定事件
- vue中如何监听事件? 使用v-on指令
- v-on的使用; 缩写@
- 如果我们希望一个元素绑定多个事件,就需要传入一个对象;不能使用缩写形式
```
<button v-on="{ click:btnClick, mousemove:mouseMove }">特殊按钮</button>
```
- 参数传递
    - 如果该方法不需要额外的参数,那么方法中可以不加括号;但是**方法默认就有一个参数,会默认将原生事件event参数传递进去**
- 条件渲染
    - v-if
    - v-else
    - v-else-if
    - v-show
- template元素
    - 如果我们希望切换的是多个元素
    - 此时我们可以渲染div,但是我们并不希望div这种元素被渲染
    ```
    <template v-if="isShow">
        <h2>Hello</h2>
        <h2>World</h2>
    </template>
    ```
- v-show和v-if的区别
    - 用法上的区别
        - **v-show不支持template**
        - v-show不可以和v-else一起使用
    - 本质的区别
        - v-show元素无论是否需要显示到浏览器中,**它的DOM实际都是存在的**,只是通过CSS的display属性来进行切换
        - v-if当条件为false时,其对应的原生压根不会渲染到DOM中
- 开发中如何选择
    - 需要在显示和隐藏之间频繁的切换,使用v-show比较好


### 遍历
1. v-for的基本使用
- 通用格式；(item, index) in 数组；注意：item和index的顺序不能颠倒
- v-for也支持遍历对象，而且支持三个参数
    - 格式
    - (value, key, index) in object
- 类似于v-if，你可以使用template元素来循环渲染一段包含多个元素的内容

2. 数组
- 生成新的数组的方法
    - filter()
    - concat()
    - slice()

### key和diff算法
1. key属性主要用在Vue的虚拟DOM算法，在新旧Nodes对比时辨识VNodes


### 计算属性（computed）
1. 计算属性是有缓存的
    - 计算属性会基于它们的依赖关系进行缓存
    - 在数据不发生变化时，计算属性是不需要重新计算的
2. 计算属性的setter和getter
    - 计算属性在大多数情况下，只需要一个getter方法，所以我们会将计算属性直接写成一个函数
    - **如果我们想要设置计算属性的值**，可以给计算属性设置一个setter的方法
3. 计算属性是可以直接绑定在data上的


### 侦听器（watch）
1. 在代码中，我们想要监听某个数据的变化，就需要侦听器watch来完成


### v-model的基本使用
1. v-model指令可以在表单input、textarea以及select元素上创建双向数据绑定
2. 原理
    - v-bind绑定value属性的值
    - v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中
3. v-model绑定checkbox
    - 单个勾选框
        - v-model即为布尔值
        - 此时input的value属性并不影响v-model的值
    - 多个复选框
        - 因为可以选择多个，所以对应的data中属性是一个数组

### Vue组件开发的基础(Vue Cli脚手架的使用)
#### Vue Cli创建项目
1. 全局安装Vue Cli
```
npm install @vue/cli -g
```
2. 升级Vue Cli(升级到新版本)
```
npm update @vue/cli -g
```
3. 使用Vue的命令来创建项目
```
Vue create 项目名称
```

### 组件间通信
1. 组件的拆分
2. 组件的通信
    - 父子组件之前通信的方式
        - 父 => 子; 通过props属性(有两种常见的写法)
        - 子 => 父; 通过$emit触发事件
            - 父组件通过@xxx绑定事件
            - 子组件通过this.$emit('xxx', 传递数据)
3. 插槽slot
- 开发中,我们会经常封装一个个可复用的组件;为了**让这个组件具有更强的通用性**, 我们应该让使用者**决定某一块区域到底存放什么内容和元素**
- 如何使用插槽slot?
    - 定义插槽
        - 1、抽取共性,预留不同
        - 2、共同元素,内容依然在组件内进行封装
        - 3、**将不同的元素使用slot作为占位符**让外部决定
    - 如何使用slot
        - 1、将<slot>元素作为承载分发内容的出口
- 具名插槽的使用
    - 1、具名插槽就是给插槽取一个名字;
    - 2、slot元素有一个特殊的属性: name
    - 3、**一个不带name的slot**,会有隐含的名字default;
    ```
    定义插槽的位置
    <div class="left">
        <slot name="center"></slot>
    </div>

    传入插槽的内容进行定义
    <template v-slot:center>
        <h2>中间标题</h2>
    </template>
    ```

- 作用域插槽;
    - 概念:我们希望插槽可以访问到子组件的内容是非常重要的
    - 小tips
        - 1、如果我们的插槽是默认插槽default,那么使用v-slot:default="slotProps"可以简写为v-slot="slotProps"
        - 2、如果我们的插槽只有默认插槽时,组件的标签可以被当作插槽的模版来使用,这样,我们就可以将v-slot直接使用在组件上
        - 3、有默认插槽和具名插槽,按照完整的template来编写
        - 4、出现多个插槽,为所有插槽使用完整的基于<template>的语法

### 非父子组件通信
1、全局事件总线
2、Provide/Inject
    - 用于祖孙之间的通信方式

### 认识生命周期
1、每个组件都会经历从创建、挂载、更新、卸载的过程

#### refs的使用
1、给元素或者组件绑定一个ref属性;可以直接获取到元素对象或者子组件实例
2、组件实例身上有一个$refs

#### $parent
1、我们可以通过$parent 来访问父元素
2、Vue3中移除了$children的属性

#### 认识keep-alive
1、在开发中,某些情况下我们希望继续保持组件的状态,而不是销毁掉,可以使用内置组件:keep-alive
```
<keep-alive include="home,about">
    <component name="why" />
</keep-alive>
```
2、keep-alive有一些属性
    - include; 只有名称匹配的组件会被混存
    - exclude; 任何名称匹配的组件都不会被缓存
    - max
3、缓存组件的生命周期
- activated
- deactivated





    




