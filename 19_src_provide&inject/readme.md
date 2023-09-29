provide与inject
- 作用：实现祖先与后代组件之间的通信（主要是祖孙）
- 套路：父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据
    - 而且像provider/inject都是一个个明确的函数,需要进行相关的引入操作
        - 都是函数的相关工作
        - 父组件: provide('car', car) // 给自己的后代组件传递数据
        - 子组件: let car = inject('car') // 进行接收操作即可
