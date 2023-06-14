# Vue3
![Vue3](./picture/Vue3.png)

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
        - 2、
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



